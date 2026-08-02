export type CatalogImage = {
  url: string;
  height: number | null;
  width: number | null;
};

export type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  price: string;
  sale_price: string | null;
  currency: string;
  url: string | null;
  image_url: string;
  images: CatalogImage[];
  brand: string;
  category: string;
  availability: string;
  last_synced: string;
};

export type CatalogData = {
  products: CatalogProduct[];
  synced_at: string | null;
};
