import Link from "next/link";
import Image from "next/image";
import { services, stats, getProducts } from "@/lib/data";
import AIRecommender from "@/components/AIRecommender";
import HeroSlider from "@/components/HeroSlider";
import InteractiveShowcase from "@/components/InteractiveShowcase";

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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,150,254,0.3),_transparent_35%),linear-gradient(135deg,_#031230_0%,_#061d45_45%,_#0a2e64_100%)]" />
        <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(16,150,254,0.2) 0%, transparent 30%), radial-gradient(circle at 80% 30%, rgba(0,107,239,0.25) 0%, transparent 35%), linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)' }} />
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl animate-float" />
        <div className="absolute bottom-16 right-10 h-96 w-96 rounded-full bg-accent-dark/20 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-accent text-sm font-medium">AI-powered technology partner</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Build a future-ready</span>
                <span className="mt-3 block text-transparent bg-clip-text bg-gradient-to-r from-accent via-sky-300 to-blue-400">digital ecosystem</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                From intelligent CCTV and secure networks to immersive fiber and data solutions, we deliver modern infrastructure that feels fast, resilient, and beautifully connected.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25">
                  Book a strategy call
                </Link>
                <Link href="/services" className="px-8 py-3.5 border border-white/15 text-white font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm">
                  Explore capabilities
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-8 pt-4">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="text-gray-400 text-xs uppercase tracking-[0.25em]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full h-[500px] rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-accent/10 backdrop-blur-xl">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      <InteractiveShowcase />

      {/* Smart Product Recommender */}
      <AIRecommender />

      {/* Category Posters */}
      <section className="relative">
        {[
          {
            id: "cctv",
            title: "CCTV Security & Surveillance",
            desc: "Advanced surveillance systems for complete peace of mind. HD & 4K IP cameras, PTZ tracking, night vision, AI detection, and remote monitoring solutions for homes and businesses.",
            features: ["HD & 4K IP Cameras", "PTZ & Smart Tracking", "Night Vision & Thermal", "AI Video Analytics"],
            image: "/images/cat-cctv.jpg",
            gradient: "from-[#031230]/95 via-[#082255]/70 to-transparent",
            icon: "📹",
          },
          {
            id: "networking",
            title: "Networking Solutions",
            desc: "Robust infrastructure to keep your business connected. LAN/WAN design, structured cabling, WiFi 6/6E, managed switches, firewalls, and VPN solutions.",
            features: ["LAN/WAN Design", "WiFi 6/6E Access Points", "Network Security & Firewalls", "Structured Cabling"],
            image: "/images/cat-networking.jpg",
            gradient: "from-[#031230]/95 via-[#0A2E64]/70 to-transparent",
            icon: "🌐",
          },
          {
            id: "fiber",
            title: "Fiber Optic Communication",
            desc: "Light-speed connectivity for mission-critical data. Single-mode & multi-mode fiber, FTTH/FTTP deployments, splicing, termination, and DWDM solutions.",
            features: ["Single & Multi-mode Fiber", "FTTH & FTTP Deployments", "Fiber Splicing & Termination", "DWDM & CWDM Solutions"],
            image: "/images/cat-fiber.jpg",
            gradient: "from-[#031230]/95 via-[#0A2E64]/70 to-transparent",
            icon: "🔌",
          },
          {
            id: "datacom",
            title: "Data Communication",
            desc: "Seamless data flow across your entire infrastructure. Structured cabling, wireless bridges, RF communication, SCADA networks, and IoT connectivity.",
            features: ["Structured Cabling", "Wireless Point-to-Point", "SCADA & Industrial Networks", "IoT Connectivity"],
            image: "/images/cat-datacom.jpg",
            gradient: "from-[#031230]/95 via-[#0A2E64]/70 to-transparent",
            icon: "📡",
          },
        ].map((cat, i) => (
          <div key={cat.id} className={`relative h-[80vh] flex items-center ${i % 2 === 0 ? "" : "justify-end"}`}>
            <div className="absolute inset-0">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover"
                priority={i < 2}
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-r ${cat.gradient}`} />
            <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${i % 2 === 0 ? "text-left" : "text-right"}`}>
              <div className={`max-w-xl ${i % 2 === 0 ? "ml-0" : "ml-auto"}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-white/80 text-sm font-medium uppercase tracking-wider">{cat.id}</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {cat.title}
                </h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  {cat.desc}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {cat.features.map((f) => (
                    <span key={f} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-primary to-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">Our Core Services</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">End-to-end technology solutions tailored for your business</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.id}
                href="/services"
                className="group bg-gradient-to-b from-secondary/50 to-primary/50 border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-accent/20 transition-colors">
                  {["📹", "🌐", "🔌", "📡"][i]}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/5 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">Shop</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Featured Products</h2>
            </div>
            <Link href="/products" className="text-accent hover:text-accent-dark font-medium text-sm flex items-center gap-1">
              View All Products <span>→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getProducts().slice(0, 8).map((product) => (
              <div key={product.id} className="group bg-secondary/30 border border-white/5 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-secondary to-primary flex items-center justify-center p-8 relative overflow-hidden">
                  {product.image ? (
                    <Image src={product.image} alt={product.name} fill className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" unoptimized />
                  ) : (
                    <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                      {product.category === "CCTV" ? "📷" : "📡"}
                    </div>
                  )}
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
                  <h3 className="text-white text-sm font-medium leading-tight mb-2 line-clamp-2">{product.name}</h3>
                  <StarRating rating={product.rating} />
                  {product.description && (
                    <p className="mt-2 text-xs text-gray-400 leading-relaxed line-clamp-2">{product.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-t from-secondary/50 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Why Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">Why Choose Data Point Tech?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💰", title: "Budget Friendly", desc: "Cost-effective solutions for long-term stable relationships with our clients." },
              { icon: "⭐", title: "Quality First", desc: "Wide range of quality products from world-class technology partners." },
              { icon: "🤝", title: "Pre-Sales Support", desc: "Professional consultation to help you choose the right solution for your needs." },
              { icon: "🔧", title: "Warranty & Service", desc: "Comprehensive warranty support, on-site service, and RMA labs." },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-b from-secondary/50 to-primary/50 border border-white/5 rounded-2xl p-6 text-center hover:border-accent/30 transition-all duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent-dark/10" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Get in touch with our experts for a free consultation and customized quote.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25">
              Contact Us Now
            </Link>
            <a href="tel:03167788990" className="px-8 py-3.5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              0316 7788990
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
