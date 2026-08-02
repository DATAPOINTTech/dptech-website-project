import { NextResponse } from "next/server";
import { syncCatalog } from "@/lib/catalog-sync";

export async function POST() {
  const result = await syncCatalog();
  if (result.success) {
    return NextResponse.json({ message: `Synced ${result.count} products`, count: result.count });
  }
  return NextResponse.json({ error: result.error }, { status: 500 });
}
