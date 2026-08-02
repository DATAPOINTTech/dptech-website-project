"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AIRecommender from "@/components/AIRecommender";
import type { ProductInfo } from "@/lib/data";

const productImageMap: Record<string, string> = {
  CCTV: "/images/cat-cctv.jpg",
  Networking: "/images/cat-networking.jpg",
  Fiber: "/images/cat-fiber.jpg",
  Datacom: "/images/cat-datacom.jpg",
  Accessories: "/images/cat-cctv.jpg",
  "Access Control": "/images/cat-networking.jpg",
  default: "/images/hero-tech-1.jpg",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? "text-accent" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [catalogProducts, setCatalogProducts] = useState<ProductInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState<string | null>(null);

  const loadProducts = () => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => {
        setCatalogProducts(data.products);
        if (data.synced_at) setLastSynced(data.synced_at);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(loadProducts, []);

  const syncFromCatalog = async () => {
    setSyncing(true);
    try {
      const res = await fetch("/api/sync", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        loadProducts();
      } else {
        alert(data.error || "Sync failed");
      }
    } catch {
      alert("Failed to sync. Check your Meta API credentials in .env.local");
    }
    setSyncing(false);
  };

  const allCategories = ["All", ...new Set(catalogProducts.map((p) => p.category))];

  const filtered = (catalogProducts as (ProductInfo & { badge?: string | null })[]).filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Our Shop</span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">Products</h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Browse our range of security and networking products
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              {lastSynced && (
                <span className="text-xs text-gray-500">
                  Last synced: {new Date(lastSynced).toLocaleDateString()}
                </span>
              )}
              <button
                onClick={syncFromCatalog}
                disabled={syncing}
                className="px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent text-xs font-medium rounded-lg hover:bg-accent/20 transition-colors disabled:opacity-50"
              >
                {syncing ? "Syncing..." : "Sync from WhatsApp Catalog"}
              </button>
            </div>
          </div>

          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 transition-colors"
            />
            <svg className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-primary"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Loading products...</p>
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((product) => {
                const imageSource = (product.image && product.image.startsWith("http"))
                  ? product.image
                  : productImageMap[product.category] || productImageMap.default;

                return (
                  <div key={product.id} className="group bg-secondary/30 border border-white/5 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300">
                    <div className="aspect-square bg-gradient-to-br from-secondary to-primary flex items-center justify-center p-0 relative overflow-hidden">
                      <Image
                        src={imageSource}
                        alt={product.name}
                        fill
                        className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                      {product.badge && (
                        <span className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          product.badge === "Sale" ? "bg-accent/20 text-accent" :
                          product.badge === "Premium" ? "bg-accent-dark/20 text-blue-300" :
                          product.badge === "Best Seller" ? "bg-accent/30 text-accent" :
                          "bg-blue-500/20 text-blue-300"
                        }`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-gray-500 text-xs mb-1">{product.category}</p>
                      <h3 className="text-white text-sm font-medium leading-tight mb-2">{product.name}</h3>
                      <StarRating rating={product.rating} />
                      {product.description && (
                        <p className="mt-2 text-xs text-gray-400 leading-relaxed line-clamp-3">{product.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-5xl mb-4 block opacity-30">🔍</span>
              <p className="text-gray-400 text-lg">No products found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      <AIRecommender />
    </>
  );
}
