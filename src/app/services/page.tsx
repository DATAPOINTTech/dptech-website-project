import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, string> = {
  cctv: "📹",
  networking: "🌐",
  fiberoptic: "🔌",
  datacom: "📡",
};

const serviceVisuals: Record<string, { src: string; alt: string; label: string }> = {
  cctv: { src: "/images/cat-cctv.jpg", alt: "CCTV surveillance system", label: "AI-powered security" },
  networking: { src: "/images/cat-networking.jpg", alt: "Networking infrastructure", label: "Secure connectivity" },
  fiberoptic: { src: "/images/cat-fiber.jpg", alt: "Fiber optic cabling", label: "Fiber backbone" },
  datacom: { src: "/images/cat-datacom.jpg", alt: "Data communication infrastructure", label: "Data flow systems" },
};

const softwareSolutions = [
  {
    id: "anpr",
    title: "ANPR Monitoring Suite",
    description:
      "Transform your security and vehicle tracking with our advanced ANPR (Automatic Number Plate Recognition) Monitoring Suite, fully deployable on a web platform. Monitor, analyze, and manage vehicle movements in real-time from anywhere using a secure and scalable web interface.",
    image: "https://datapointtechnology.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-18-at-4.08.50-PM-1024x579.jpeg",
    features: ["Real-time plate recognition", "Web-based dashboard", "Vehicle movement history", "Alert & notification system", "Multi-camera support", "Scalable cloud deployment"],
    url: "https://datapointtechnology.com/anpr-monitoring-suite/",
    icon: "🚗",
    badge: "New",
  },
  {
    id: "lms",
    title: "Student Portal / LMS Management System",
    description:
      "A complete learning management solution that enables online classes, course management, assignments, assessments, and student progress tracking from a centralized platform.",
    image: "https://datapointtechnology.com/wp-content/uploads/2026/06/8477f89a-f43e-4bff-a2a2-0b472639b443.jpg",
    features: ["Online class management", "Course & curriculum builder", "Assignment & assessment tools", "Student progress tracking", "Parent & teacher portals", "Attendance integration"],
    url: "https://datapointtechnology.com/student-portal-lms-management-system/",
    icon: "🎓",
    badge: null,
  },
  {
    id: "admission",
    title: "Admission Management System",
    description:
      "Streamline the entire admission process from application submission to enrollment with automated workflows, document management, and real-time applicant tracking.",
    image: "https://datapointtechnology.com/wp-content/uploads/2026/06/e0b05818-3a75-4551-ad47-1773f8ed4e44.jpg",
    features: ["Online application portal", "Document management", "Automated workflows", "Real-time applicant tracking", "Fee management", "Enrollment processing"],
    url: "https://datapointtechnology.com/admission-management-system/",
    icon: "📋",
    badge: null,
  },
  {
    id: "attendance",
    title: "Attendance Management System",
    description:
      "Track and manage attendance efficiently using digital records, automated reports, and real-time monitoring for students, employees, or staff.",
    image: "https://datapointtechnology.com/wp-content/uploads/2026/06/4fbc60e4-1b38-4666-93d3-50de709421af.jpg",
    features: ["Digital attendance records", "Biometric integration", "Automated daily reports", "Real-time monitoring", "Leave management", "SMS & email alerts"],
    url: "https://datapointtechnology.com/attendance-management-system/",
    icon: "📅",
    badge: null,
  },
  {
    id: "recruitment",
    title: "Recruitment Management System",
    description:
      "Simplify hiring with a centralized platform for job postings, applicant tracking, interview scheduling, and candidate management throughout the recruitment process.",
    image: "https://datapointtechnology.com/wp-content/uploads/2026/06/522d36ec-ea8a-49ff-8d85-815be8521af4.jpg",
    features: ["Job posting management", "Applicant tracking system", "Interview scheduling", "Candidate pipeline", "HR dashboard & analytics", "Offer letter generation"],
    url: "https://datapointtechnology.com/recruitment-management-system/",
    icon: "👥",
    badge: null,
  },
];

const faqs = [
  { q: "What types of software solutions do you offer?", a: "We provide Student Portal/LMS, Admission Management, Attendance Management, Recruitment Management systems, and ANPR Monitoring Suite." },
  { q: "Can these systems be customized for our institution?", a: "Yes, all our solutions can be customized according to your institution's workflow and requirements." },
  { q: "Is the software cloud-based or installed locally?", a: "We offer both cloud-based and on-premise solutions depending on your preference." },
  { q: "Do you provide training and support?", a: "Yes, we provide full training, onboarding, and ongoing technical support." },
  { q: "Can all systems be integrated together?", a: "Yes, all modules can work individually or as a fully integrated institutional system." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Our Expertise</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">Services We Deliver</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end technology solutions — from CCTV & networking infrastructure to custom software systems
          </p>
        </div>
      </section>

      {/* Hardware / Infrastructure Services */}
      {services.map((service, index) => (
        <section key={service.id} className={`py-20 ${index % 2 === 1 ? "bg-gradient-to-b from-secondary/30 to-primary" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-5xl mb-4 block">{iconMap[service.id]}</span>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.brands.map((brand) => (
                    <span key={brand} className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-medium">
                      {brand}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex px-6 py-3 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-dark transition-all">
                  Get a Quote
                </Link>
              </div>
              <div className={`hidden lg:flex justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-accent/10">
                  <Image
                    src={serviceVisuals[service.id]?.src || "/images/hero-tech-1.jpg"}
                    alt={serviceVisuals[service.id]?.alt || service.title}
                    fill
                    className="object-cover"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    {serviceVisuals[service.id]?.label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Software Solutions Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/40 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Software Division</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">Software Solutions</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Run your institution smarter with fully integrated software solutions. Automate admissions, attendance, learning, and recruitment in one platform.
            </p>
          </div>

          <div className="space-y-20">
            {softwareSolutions.map((sw, i) => (
              <div key={sw.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{sw.icon}</span>
                    {sw.badge && (
                      <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs font-semibold rounded-full border border-accent/30">
                        {sw.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">{sw.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{sw.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {sw.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href="/contact" className="px-6 py-3 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-dark transition-all">
                      Get a Demo
                    </Link>
                    <a
                      href={sw.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-white/15 text-white font-semibold rounded-xl hover:bg-white/5 transition-all"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
                <div className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-accent/5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={sw.image}
                    alt={sw.title}
                    width={720}
                    height={405}
                    className="w-full object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gradient-to-b from-primary to-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-secondary/30 border border-white/5 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Every business is unique. Tell us about your requirements and we&apos;ll design a solution that fits.</p>
          <Link href="/contact" className="inline-flex px-8 py-3.5 bg-accent text-primary font-semibold rounded-xl hover:bg-accent-dark transition-all shadow-lg shadow-accent/25">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
