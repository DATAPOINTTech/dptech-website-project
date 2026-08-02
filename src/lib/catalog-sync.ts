import fs from "fs";
import path from "path";
import type { CatalogProduct, CatalogData } from "./catalog-types";

const CATALOG_PATH = path.join(process.cwd(), "public", "data", "catalog-products.json");

function getConfig() {
  return {
    catalogId: process.env.META_CATALOG_ID || "",
    accessToken: process.env.META_ACCESS_TOKEN || "",
    apiVersion: process.env.META_API_VERSION || "v21.0",
  };
}

export function isConfigured(): boolean {
  const config = getConfig();
  return Boolean(config.catalogId && config.accessToken);
}

function mapCategory(metaCategory: string): string {
  const cat = metaCategory.toLowerCase();
  if (cat.includes("cctv") || cat.includes("camera") || cat.includes("security") || cat.includes("surveillance")) return "CCTV";
  if (cat.includes("network") || cat.includes("router") || cat.includes("switch") || cat.includes("wifi") || cat.includes("access point")) return "Networking";
  if (cat.includes("fiber") || cat.includes("optic")) return "Fiber Optic";
  if (cat.includes("data") || cat.includes("communication")) return "Data Communication";
  return "CCTV";
}

export async function syncCatalog(): Promise<{ success: boolean; count: number; error?: string }> {
  if (!isConfigured()) {
    return { success: false, count: 0, error: "Meta API not configured. Set META_CATALOG_ID and META_ACCESS_TOKEN in .env.local" };
  }

  const { catalogId, accessToken, apiVersion } = getConfig();
  const products: CatalogProduct[] = [];
  let url = `https://graph.facebook.com/${apiVersion}/${catalogId}/products?fields=id,name,description,price,sale_price,images,url,availability,brand,category&access_token=${accessToken}&limit=100`;

  try {
    while (url) {
      const res = await fetch(url);
      if (!res.ok) {
        const err = await res.text();
        return { success: false, count: 0, error: `Meta API error (${res.status}): ${err}` };
      }

      const data = await res.json();

      for (const item of (data.data || [])) {
        const imageUrl = item.images?.[0]?.url || item.image_url || "";
        const priceStr = item.price || "0";
        const salePriceStr = item.sale_price || null;

        products.push({
          id: item.id,
          name: item.name || "Unnamed Product",
          description: item.description || "",
          price: priceStr,
          sale_price: salePriceStr,
          currency: "PKR",
          url: item.url || null,
          image_url: imageUrl,
          images: item.images || [],
          brand: item.brand || "",
          category: mapCategory(item.category || item.brand || ""),
          availability: item.availability || "in stock",
          last_synced: new Date().toISOString(),
        });
      }

      url = data.paging?.next || null;
    }

    const catalogData: CatalogData = {
      products,
      synced_at: new Date().toISOString(),
    };

    const dir = path.dirname(CATALOG_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalogData, null, 2), "utf-8");

    return { success: true, count: products.length };
  } catch (err) {
    return { success: false, count: 0, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

export function getCatalogProducts(): CatalogData {
  try {
    if (fs.existsSync(CATALOG_PATH)) {
      const raw = fs.readFileSync(CATALOG_PATH, "utf-8");
      return JSON.parse(raw);
    }
  } catch {
    // fall through
  }
  return { products: [], synced_at: null };
}

export function getCatalogProductImageUrl(product: CatalogProduct): string {
  if (product.image_url) {
    return product.image_url;
  }
  if (product.images && product.images.length > 0) {
    return product.images[0].url;
  }
  return "";
}
