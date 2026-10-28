import Link from "next/link";
import { stats, services } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-dark/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">Who We Are</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leading IT system integrators with a passion for technology and excellence
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Where <span className="text-accent">Technology</span> Meets Excellence
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                DATAPOINT is a leading IT system integrator, specializing in Security & Surveillance (PACS),
                Data Center solutions, Networking infrastructure, Fiber Optic communication, and end-to-end IT
                solutions & services with world-class technology partnerships.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                With over 10 years of experience, we have successfully delivered 500+ projects for 300+ happy
                clients across Pakistan. Our dynamic and energetic team works tirelessly to bring the best
                possible solutions for your business.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                From the scratch we plan, organize, and create seamless technology solutions for you.
                We believe in building long-term relationships through quality service, budget-friendly
                solutions, and uncompromising quality.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-secondary/30 rounded-xl border border-white/5">
                    <p className="text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {["📹", "🌐", "🔌", "💻"].map((icon, i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-secondary/50 to-primary/50 border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-3">
                    <span className="text-5xl">{icon}</span>
                    <span className="text-sm text-gray-400 font-medium">{services[i]?.title.split(" ").slice(0, 2).join(" ")}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary/30 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Technology Partners</h2>
            <p className="text-gray-400">We work with world-class technology brands</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["Hikvision", "EZVIZ", "Dahua", "Cisco", "MikroTik", "TP-Link", "Ubiquiti", "Corning", "CommScope"].map((brand) => (
              <div key={brand} className="px-6 py-3 bg-secondary/50 border border-white/5 rounded-xl text-gray-300 font-medium text-sm">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Have a project in mind? We&apos;d love to hear from you. Let&apos;s discuss how we can help your business grow.</p>
          <Link href="/contact" className="inline-flex px-8 py-3.5 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
