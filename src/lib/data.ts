export const siteConfig = {
  name: "Data Point Technologies",
  tagline: "Smart Solutions for a Smarter Business",
  phone: "0316 7788990",
  email: "info@datapointtechnology.com",
  address: "Karachi, Pakistan",
};

export const services = [
  {
    id: "cctv",
    title: "CCTV & Security Surveillance",
    shortDesc: "Advanced surveillance systems for complete peace of mind",
    description: "We provide end-to-end CCTV solutions including IP cameras, analog systems, NVRs/DVRs, and remote monitoring. Our team designs and installs customized security systems for homes, businesses, and industrial facilities.",
    icon: "cctv",
    features: [
      "HD & 4K IP Camera Installation",
      "PTZ & Smart Tracking Cameras",
      "Night Vision & Thermal Imaging",
      "Remote Mobile Monitoring",
      "Video Analytics & AI Detection",
      "Access Control Integration",
    ],
    brands: ["Hikvision", "EZVIZ", "Dahua", "Reoqoo"],
  },
  {
    id: "networking",
    title: "Networking Solutions",
    shortDesc: "Robust infrastructure to keep your business connected",
    description: "From structured cabling to complete network design and implementation, we deliver reliable, high-performance networking solutions tailored to your business needs.",
    icon: "network",
    features: [
      "LAN/WAN Design & Implementation",
      "Structured Cabling (Cat6, Cat6a, Cat7)",
      "WiFi 6/6E Access Points",
      "Managed & Unmanaged Switches",
      "Network Security & Firewalls",
      "VPN & Remote Access Solutions",
    ],
    brands: ["Cisco", "MikroTik", "TP-Link", "Ubiquiti"],
  },
  {
    id: "fiberoptic",
    title: "Fiber Optic Communication",
    shortDesc: "Light-speed connectivity for mission-critical data",
    description: "We specialize in fiber optic network design, installation, and maintenance. Our fiber solutions deliver unparalleled speed, bandwidth, and reliability for businesses that cannot afford downtime.",
    icon: "fiber",
    features: [
      "Single-mode & Multi-mode Fiber",
      "FTTH & FTTP Deployments",
      "Fiber Splicing & Termination",
      "Optical Power Budget Analysis",
      "DWDM & CWDM Solutions",
      "Fiber Testing & Certification",
    ],
    brands: ["Corning", "CommScope", "FS.com", "Panduit"],
  },
  {
    id: "datacom",
    title: "Data Communication",
    shortDesc: "Seamless data flow across your entire infrastructure",
    description: "Our data communication services ensure your systems talk to each other efficiently. From structured cabling to wireless bridges, we build the backbone of your digital operations.",
    icon: "datacom",
    features: [
      "Structured Cabling Systems",
      "Data Center Cabling",
      "Wireless Point-to-Point Bridges",
      "RF & Microwave Communication",
      "SCADA & Industrial Networks",
      "IoT Connectivity Solutions",
    ],
    brands: ["Siemens", "Schneider", "Belden", "D-Link"],
  },
];

export type ProductInfo = {
  id: string | number;
  name: string;
  price: string;
  originalPrice?: string | null;
  image: string;
  category: string;
  rating: number;
  badge?: string | null;
  description?: string;
};

export const fallbackProducts: ProductInfo[] = [
  {
    id: 1,
    name: "REOQOO Smart Camera Dual-Band",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/03/images.avif",
    category: "CCTV",
    rating: 5,
    badge: "Sale",
    description: "Dual-band WiFi indoor camera with 2K resolution, color night vision, and two-way audio.",
  },
  {
    id: 2,
    name: "REOQOO Smart Camera Pro",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/03/images-2-e1744140493509.avif",
    category: "CCTV",
    rating: 4,
    badge: "Sale",
    description: "Pro-grade indoor camera with AI motion detection, 360° pan/tilt, and cloud storage.",
  },
  {
    id: 3,
    name: "REOQOO Outdoor Camera",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/04/sg-11134301-7rd64-lukkujlkpoyab4-300x300.avif",
    category: "CCTV",
    rating: 4,
    badge: "Sale",
    description: "IP67 weatherproof outdoor camera with 4MP resolution and smart person detection.",
  },
  {
    id: 4,
    name: "Outdoor PTZ Camera Dual Lens",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-03-at-10.33.02-PM-300x300.jpeg",
    category: "CCTV",
    rating: 5,
    badge: "Sale",
    description: "Dual-lens PTZ camera with 360° coverage, optical zoom, and auto-tracking.",
  },
  {
    id: 5,
    name: "Outdoor PTZ Camera Tri-Lens",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-03-at-10.33.01-PM-300x300.jpeg",
    category: "CCTV",
    rating: 5,
    badge: "Sale",
    description: "Triple-lens PTZ with wide, standard, and telephoto views for complete area coverage.",
  },
  {
    id: 6,
    name: "EZVIZ H4 3K",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/02/H4_06-300x300.jpg",
    category: "CCTV",
    rating: 5,
    badge: "Sale",
    description: "EZVIZ H4 with 3K Super HD, color night vision, and built-in spotlight.",
  },
  {
    id: 7,
    name: "Hikvision 4MP+4MP 4X PTZ",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/02/DS-2SE3C404MWG-E_14_image_3-300x300.jpg",
    category: "CCTV",
    rating: 5,
    badge: "Premium",
    description: "Hikvision TandemVu dual 4MP PTZ with deep learning analytics, IR 100m range, and IP67 rating.",
  },
  {
    id: 8,
    name: "EZVIZ Wireless Kit",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/02/b0d71162-f207-4e98-af1a-b7c367e52428-300x300.jpg",
    category: "CCTV",
    rating: 4,
    badge: "Sale",
    description: "Complete wireless CCTV kit with NVR, 4 cameras, and 1TB HDD — plug and play.",
  },
  {
    id: 9,
    name: "EZVIZ H3C 2K Color VU Outdoor",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/02/Ezviz-H3c-2K-300x300.webp",
    category: "CCTV",
    rating: 5,
    badge: "Sale",
    description: "EZVIZ H3C 2K outdoor camera with full-color night vision and AI human detection.",
  },
  {
    id: 10,
    name: "WD 1TB Hard Drive",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/02/1-tb-300x300.webp",
    category: "Accessories",
    rating: 4,
    badge: "Sale",
    description: "WD Purple 1TB surveillance-grade hard drive, optimized for 24/7 CCTV recording.",
  },
  {
    id: 11,
    name: "Visual Biometric Device",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/01/access-control-biometrics-system-fingerprint-biometric-device-png-favpng-BY3qTRAn2m2UWDBEsAGP7ajcX-removebg-preview-1.png",
    category: "Access Control",
    rating: 5,
    badge: "New",
    description: "Fingerprint & face recognition biometric device for secure access control.",
  },
  {
    id: 12,
    name: "Modern Flexible CCTV Camera",
    price: "",
    originalPrice: null,
    image: "https://datapointtechnology.com/wp-content/uploads/2025/01/pngwing.com-3.png",
    category: "CCTV",
    rating: 4,
    badge: "New Arrival",
    description: "Flexible dome CCTV camera with adjustable lens, suitable for indoor and outdoor use.",
  },
];

import { getCatalogProducts, isConfigured } from "./catalog-sync";
import type { CatalogProduct } from "./catalog-types";

export function getProducts(): ProductInfo[] {
  if (isConfigured()) {
    const catalog = getCatalogProducts();
    if (catalog.products.length > 0) {
      return catalog.products.map((p: CatalogProduct) => ({
        id: p.id,
        name: p.name,
        price: p.sale_price ? `₨ ${p.sale_price}` : `₨ ${p.price}`,
        originalPrice: p.sale_price ? `₨ ${p.price}` : null,
        image: p.image_url || p.images?.[0]?.url || "",
        category: p.category,
        rating: 4,
        badge: p.sale_price ? "Sale" : null,
        description: p.description || "",
      }));
    }
  }
  return fallbackProducts;
}

export const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "300+" },
  { label: "Years Experience", value: "10+" },
  { label: "Products Delivered", value: "10,000+" },
];
