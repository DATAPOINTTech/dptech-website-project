import { siteConfig } from "@/lib/data";
import AILeadCapture from "@/components/AILeadCapture";

export default function ContactPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can help your business grow
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <AILeadCapture />
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6 lg:sticky lg:top-28">
                <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                <p className="text-gray-400 text-sm mb-6">Reach out to us through any of these channels</p>

                {[
                  {
                    icon: "📞",
                    label: "Phone",
                    value: siteConfig.phone,
                    href: `tel:${siteConfig.phone}`,
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: siteConfig.email,
                    href: `mailto:${siteConfig.email}`,
                  },
                  {
                    icon: "📍",
                    label: "Location",
                    value: siteConfig.address,
                    href: null,
                  },
                  {
                    icon: "🕐",
                    label: "Business Hours",
                    value: "Mon - Sat: 9:00 AM - 7:00 PM",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-secondary/30 border border-white/5 rounded-xl">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-gray-500 text-xs font-medium">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white hover:text-accent transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="mt-8 p-6 bg-gradient-to-br from-accent/5 to-accent-dark/5 border border-accent/10 rounded-2xl">
                  <p className="text-accent font-semibold mb-1">💡 Need immediate assistance?</p>
                  <p className="text-gray-400 text-sm">Call us now and our team will assist you right away.</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-dark transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
