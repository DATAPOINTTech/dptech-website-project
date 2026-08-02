import { NextResponse } from "next/server";
import { getCatalogProducts, isConfigured } from "@/lib/catalog-sync";
import { fallbackProducts } from "@/lib/data";

export async function GET() {
  if (isConfigured()) {
    const catalog = getCatalogProducts();
    if (catalog.products.length > 0) {
      return NextResponse.json({ products: catalog.products, synced_at: catalog.synced_at, source: "catalog" });
    }
  }
  return NextResponse.json({ products: fallbackProducts, synced_at: null, source: "fallback" });
}
