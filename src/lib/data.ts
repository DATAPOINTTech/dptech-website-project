export const siteConfig = {
  name: "Data Point Technologies",
  legalName: "DATAPOINT Technologies",
  founded: 2016,
  tagline: "Smart Solutions for a Smarter Business",
  description: "DATAPOINT is a leading IT system integrator, Security & Surveillance (PACS), Datacenter solutions provider with expertise in end-to-end IT Solutions & services with world-class technology partnerships. Established in 2016, we specialise in CCTV Networking, Fiber Optic & Data Communication, Customised AI Agents and Enterprise Software Applications.",
  phone: "0316 7788990",
  phoneIntl: "+923167788990",
  whatsapp: "923167788990",
  email: "info@datapointtechnology.com",
  address: "Karachi, Pakistan",
  hours: "24/7 Available",
  portals: {
    invoicing: "http://invoicing.datapointtechnology.com",
    webmail: "https://webmail.datapointtechnology.com",
    inventoryDemo: "http://sm.datapointtechnology.com",
    receptionWhatsApp: "https://wa.me/923167788990?text=Assalam-o-Alaikum%20Moomal%2C%20I%20have%20an%20inquiry%20regarding%20DATAPOINT%20services",
  },
};

export const portalLinks = siteConfig.portals;

export interface ServiceItem {
  id: string;
  orderNumber: number;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  brands: string[];
  href: string;
}

export const services: ServiceItem[] = [
  {
    id: "cctv",
    orderNumber: 1,
    title: "CCTV & Security Surveillance",
    shortDesc: "Advanced surveillance systems with AI-driven detection, ColorVu 24/7 color, and mobile telemetry.",
    description: "We provide complete end-to-end CCTV and surveillance solutions including HD & 4K IP cameras, ColorVu night vision, PTZ smart tracking, high-capacity NVRs, and remote mobile monitoring. Custom designed for residential, commercial, and industrial facilities.",
    icon: "📹",
    image: "/images/cat-cctv.jpg",
    features: [
      "HD & 4K IP Camera Installation",
      "ColorVu 24/7 Vivid Night Vision",
      "PTZ & Smart Human/Vehicle Tracking",
      "PoE Network Video Recorders (NVR)",
      "AcuSense Deep Learning Analytics",
      "Remote Mobile Live View & Playback",
    ],
    brands: ["Hikvision", "EZVIZ", "Dahua", "Reoqoo"],
    href: "/services#cctv",
  },
  {
    id: "networking",
    orderNumber: 2,
    title: "Networking Solutions",
    shortDesc: "High-performance enterprise networking, secure WiFi 6, routing, and managed switching infrastructure.",
    description: "From structured Cat6/Cat6A cabling to multi-gigabit switches, enterprise routers, and secure VPNs, we engineer robust network infrastructure that keeps your business connected with maximum uptime and security.",
    icon: "🌐",
    image: "/images/cat-networking.jpg",
    features: [
      "LAN / WAN Architecture & Deployment",
      "Structured Cabling (Cat6, Cat6A, Cat7)",
      "Enterprise WiFi 6/6E Access Points",
      "Managed PoE Switches & Routers",
      "Next-Gen Firewalls & Network Security",
      "Multi-Site VPN & Remote Worker Access",
    ],
    brands: ["Cisco", "MikroTik", "TP-Link", "Ubiquiti", "D-Link"],
    href: "/services#networking",
  },
  {
    id: "fiber-datacom",
    orderNumber: 3,
    title: "Fiber Optic and DATA Communication",
    shortDesc: "Mission-critical high-speed optical fiber backbone, long-range wireless bridges, and data communication.",
    description: "Light-speed connectivity engineered for zero-latency operations. We specialize in single-mode and multi-mode optical fiber splicing, FTTH deployments, OTDR certification, RF point-to-point wireless bridges, and industrial SCADA data communication.",
    icon: "🔌",
    image: "/images/cat-fiber.jpg",
    features: [
      "Single-Mode & Multi-Mode Fiber Cabling",
      "Precision Core Splicing & Termination",
      "FTTH, FTTO & Campus Backbone Networks",
      "Optical Power Budget & OTDR Certification",
      "Long-Distance Wireless Point-to-Point Bridges",
      "Data Center Racks & SCADA Communication",
    ],
    brands: ["Corning", "CommScope", "FS.com", "Panduit", "Schneider"],
    href: "/services#fiber-datacom",
  },
  {
    id: "software",
    orderNumber: 4,
    title: "Software Solutions",
    shortDesc: "Integrated enterprise web applications, inventory management, LMS, ANPR, and cloud portals.",
    description: "Tailor-made software built to digitize and automate your business operations. From our cloud Invoicing portal and Store Inventory system to Academic LMS, Admission, Biometric Attendance, and AI Vision suites.",
    icon: "💻",
    image: "/images/products/software-lms.jpg",
    features: [
      "Store Inventory & Asset Management (Demo Live)",
      "Enterprise Invoicing & Billing System",
      "Student Portal & LMS Management System",
      "Automatic Number Plate Recognition (ANPR)",
      "Admission & Enrollment Management",
      "Biometric Attendance & Recruitment Portals",
    ],
    brands: ["DATAPOINT Cloud", "Web Applications", "AI Agents", "REST APIs"],
    href: "/services#software",
  },
];

export interface SoftwareSolution {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  url?: string;
  demoUrl?: string;
  icon: string;
  badge?: string | null;
  category: "Enterprise" | "Education" | "Security" | "HR" | "Productivity";
}

export const softwareSolutions: SoftwareSolution[] = [
  {
    id: "inventory",
    title: "Store Inventory and Asset Management System",
    description: "Comprehensive enterprise warehouse, stock, and fixed asset tracking system with real-time stock levels, multi-location transfers, automated reorder triggers, supplier management, and barcode auditing.",
    image: "/images/products/software-attendance.jpg",
    features: [
      "Multi-store & warehouse inventory tracking",
      "Asset lifecycle & maintenance monitoring",
      "Barcode & QR code scanning integration",
      "Automated stock-alert & reorder notifications",
      "Detailed P&L, stock audit & movement reports",
      "Multi-user roles with granular access controls",
    ],
    demoUrl: "http://sm.datapointtechnology.com",
    url: "http://sm.datapointtechnology.com",
    icon: "📦",
    badge: "Live Demo Available",
    category: "Enterprise",
  },
  {
    id: "invoicing",
    title: "Enterprise Invoicing & Billing Portal",
    description: "Cloud-hosted commercial invoicing and quotation engine. Generates verified PDF estimates, manages client accounts, tracks payment receipts, and syncs directly with our AI Receptionist (Moomal & Soomal).",
    image: "/images/products/it-developer.png",
    features: [
      "Instant PDF invoice & estimate generation",
      "Automated rate card & product pricing sync",
      "Client ledger & payment receipt reconciliation",
      "Integration with AI Receptionist for auto-quotes",
      "Multi-currency & tax rate calculation",
      "Secure cloud database with cPanel compatibility",
    ],
    url: "http://invoicing.datapointtechnology.com",
    demoUrl: "http://invoicing.datapointtechnology.com",
    icon: "🧾",
    badge: "Active Portal",
    category: "Enterprise",
  },
  {
    id: "lms",
    title: "Student Portal / LMS Management System",
    description: "A complete learning management platform that powers online courses, video lectures, student dashboards, assignments, assessments, and parent-teacher communication from a unified portal.",
    image: "/images/products/software-lms.jpg",
    features: [
      "Interactive student & instructor portals",
      "Course curriculum & lecture management",
      "Digital assignments & online quiz evaluation",
      "Fee voucher tracking & academic progress",
      "Parent oversight & report card publishing",
      "Seamless integration with biometric attendance",
    ],
    url: "/services#software",
    icon: "🎓",
    badge: "Education Suite",
    category: "Education",
  },
  {
    id: "anpr",
    title: "ANPR Monitoring Suite",
    description: "Automated Number Plate Recognition web suite. Integrates with HD security cameras to log vehicle entry/exit, flag blacklisted license plates, open barrier gates, and maintain audit logs.",
    image: "/images/products/software-anpr.jpg",
    features: [
      "High-accuracy optical character recognition",
      "Real-time vehicle entry/exit logging",
      "Automated barrier gate & boom control",
      "Watchlist & blacklisted plate instant alerts",
      "Searchable history by date, time, and plate",
      "Cloud & on-premise local node deployments",
    ],
    url: "/services#software",
    icon: "🚗",
    badge: "AI Vision",
    category: "Security",
  },
  {
    id: "admission",
    title: "Admission Management System",
    description: "Streamline the institutional admission pipeline from applicant registration and document upload to merit list calculation, interview scoring, and automated acceptance letters.",
    image: "/images/products/software-admission.jpg",
    features: [
      "Customizable online applicant admission forms",
      "Secure document upload & verification workflow",
      "Automated merit calculation & quota filtering",
      "Interview scheduling & scorecard capture",
      "Admission fee receipt & challan generation",
      "Instant SMS/Email admission notifications",
    ],
    url: "/services#software",
    icon: "📋",
    badge: "Education",
    category: "Education",
  },
  {
    id: "attendance",
    title: "Attendance Management System",
    description: "Enterprise attendance system supporting biometric fingerprint, RFID, and AI facial recognition cameras. Provides automated shifts, overtime calculation, and payroll exports.",
    image: "/images/products/software-attendance.jpg",
    features: [
      "Biometric device & facial camera sync",
      "Multi-shift and rotating duty schedules",
      "Late arrival, leave & overtime processing",
      "Real-time daily attendance dashboards",
      "One-click monthly payroll CSV export",
      "Employee self-service mobile portal",
    ],
    url: "/services#software",
    icon: "⏱️",
    badge: "Productivity",
    category: "Productivity",
  },
  {
    id: "recruitment",
    title: "Recruitment Management System",
    description: "End-to-end applicant tracking system (ATS) to post vacancies, screen incoming resumes, schedule interview panels, track candidate pipelines, and issue digital offer letters.",
    image: "/images/products/software-recruitment.jpg",
    features: [
      "Public career page & vacancy publisher",
      "Resume parsing & candidate pipeline kanban",
      "Panel interview scheduling with calendar sync",
      "Evaluator rating sheets & candidate notes",
      "Automated email feedback to applicants",
      "HR analytics on time-to-hire and cost",
    ],
    url: "/services#software",
    icon: "👥",
    badge: "HR Suite",
    category: "HR",
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
    name: "Hikvision 4MP ColorVu Fixed Bullet Camera (DS-2CD2T47G2-L)",
    price: "₨ 17,800",
    originalPrice: "₨ 19,500",
    image: "/images/products/hik-bullet-front.png",
    category: "CCTV",
    rating: 5,
    badge: "Best Seller",
    description: "24/7 vivid full-color night imaging with F1.0 super aperture, 4MP Ultra-HD resolution, IP67 weatherproof housing, and AcuSense AI human/vehicle classification.",
  },
  {
    id: 2,
    name: "Hikvision 4MP ColorVu Fixed Turret Network Camera (DS-2CD2347G2-L)",
    price: "₨ 16,500",
    originalPrice: "₨ 18,000",
    image: "/images/products/hik-turret.png",
    category: "CCTV",
    rating: 5,
    badge: "Popular",
    description: "Crystal clear 4MP resolution with built-in microphone for high fidelity audio, 130dB true WDR for harsh backlight scenes, and round-the-clock color surveillance.",
  },
  {
    id: 3,
    name: "Hikvision 8MP (4K) AcuSense Ultra-HD Camera (DS-2CD2386G2-I)",
    price: "₨ 28,500",
    originalPrice: "₨ 31,000",
    image: "/images/products/hik-bullet.png",
    category: "CCTV",
    rating: 5,
    badge: "4K Flagship",
    description: "Stunning 4K resolution with AcuSense deep learning perimeter protection, DarkFighter ultra low-light technology, active strobe defense, and IP67 rating.",
  },
  {
    id: 4,
    name: "Hikvision 8-ch PoE 4K Network Video Recorder (DS-7608NXI-K1/8P)",
    price: "₨ 38,500",
    originalPrice: "₨ 42,000",
    image: "/images/products/hik-nvr.png",
    category: "CCTV",
    rating: 5,
    badge: "Sale",
    description: "8 built-in PoE ports for plug-and-play installation, AcuSense 1-ch face recognition or 4-ch perimeter analysis, up to 4K HDMI output, and H.265+ smart encoding.",
  },
  {
    id: 5,
    name: "Hikvision 16-ch PoE 4K Enterprise AI NVR (DS-7716NXI-I4/16P/S)",
    price: "₨ 58,000",
    originalPrice: "₨ 64,000",
    image: "/images/products/hik-nvr2.png",
    category: "CCTV",
    rating: 5,
    badge: "Enterprise",
    description: "16-channel PoE AI NVR featuring dual HDMI outputs, 4 SATA drive bays for massive storage, facial picture library comparison, and deep learning vehicle tracking.",
  },
  {
    id: 6,
    name: "Outdoor Smart PTZ Dual-Lens 360° Tracking Camera",
    price: "₨ 14,500",
    originalPrice: "₨ 16,000",
    image: "/images/products/cctv-camera.png",
    category: "CCTV",
    rating: 4,
    badge: "Hot Deal",
    description: "Dual-lens motorized PTZ camera with 360° pan/tilt coverage, optical zoom, dual-band WiFi connectivity, siren alarm, and automatic human tracking.",
  },
  {
    id: 7,
    name: "Visual Biometric & AI Face Recognition Access Terminal",
    price: "₨ 24,500",
    originalPrice: "₨ 27,000",
    image: "/images/products/biometric-device.png",
    category: "Access Control",
    rating: 5,
    badge: "New",
    description: "High-speed facial recognition access control & attendance terminal with anti-spoofing algorithm, RFID card reader, TCP/IP communication, and door lock relay.",
  },
  {
    id: 8,
    name: "Cat6 UTP Pure Copper Network Cable (305M Roll)",
    price: "₨ 16,500",
    originalPrice: "₨ 18,000",
    image: "/images/cat-networking.jpg",
    category: "Networking",
    rating: 5,
    badge: "Pure Copper",
    description: "Hikvision high-speed 23 AWG solid bare copper Cat6 network cable roll, certified for gigabit Ethernet, PoE power delivery, and low attenuation data transfer.",
  },
  {
    id: 9,
    name: "Western Digital Purple 4TB Surveillance Hard Drive",
    price: "₨ 34,500",
    originalPrice: "₨ 37,000",
    image: "/images/products/hik-nvr.png",
    category: "Accessories",
    rating: 5,
    badge: "24/7 Reliability",
    description: "Engineered specifically for 24/7, always-on, high-definition security systems. AllFrame technology reduces frame drops and improves overall video playback.",
  },
  {
    id: 10,
    name: "Western Digital Purple 1TB Surveillance HDD",
    price: "₨ 10,900",
    originalPrice: "₨ 12,000",
    image: "/images/products/hik-nvr2.png",
    category: "Accessories",
    rating: 5,
    badge: "Essential",
    description: "1TB surveillance-grade internal SATA hard disk optimized for DVR/NVR recorders with workload rates up to 180 TB/year.",
  },
  {
    id: 11,
    name: "Single-Mode & Multi-Mode Fiber Optic Cable (Outdoor Armored)",
    price: "₨ 120 / m",
    originalPrice: null,
    image: "/images/cat-fiber.jpg",
    category: "Fiber Optic",
    rating: 5,
    badge: "Heavy Duty",
    description: "Armored outdoor fiber optic cable with steel tape protection, moisture barrier, and high tensile strength for long-distance backbone interconnects.",
  },
  {
    id: 12,
    name: "Data Center Server Rack & Managed PoE Switch Suite",
    price: "₨ 45,000+",
    originalPrice: null,
    image: "/images/products/hero-datacenter.jpg",
    category: "Data Communication",
    rating: 5,
    badge: "Infrastructure",
    description: "Enterprise rack cabinet, 24/48 port managed gigabit PoE+ switches, cable organizers, and patch panels for structured communication rooms.",
  },
];

export function getProducts(): ProductInfo[] {
  return fallbackProducts;
}

export const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Active Deployments", value: "350+" },
  { label: "Years Experience", value: "10+" },
  { label: "Cameras & Nodes Installed", value: "12,000+" },
];
