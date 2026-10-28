import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, session_id, lead_info } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const receptionUrl =
      process.env.RECEPTION_API_URL ||
      process.env.NEXT_PUBLIC_RECEPTION_API_URL ||
      "http://localhost:8000/api/chat.php";

    // Attempt forward to Dptech-Reception PHP/Python agent backend
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const upstream = await fetch(receptionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          session_id: session_id || `web_${Date.now()}`,
          lead_info: lead_info || null,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (upstream.ok) {
        const data = await upstream.json();
        return NextResponse.json({
          success: true,
          reply: data.reply || data.response,
          lead_captured: Boolean(data.lead_captured || data.qualification_active),
          engine: data.engine || "Dptech AI Reception Node",
        });
      }
    } catch {
      // Fallback to internal Moomal Receptionist intelligence
    }

    // Standard trilingual Moomal reception logic
    const lower = message.toLowerCase();
    let reply = "";
    let leadCaptured = false;

    if (lower.includes("camera") || lower.includes("cctv") || lower.includes("security") || lower.includes("surveillance")) {
      reply = "Assalam-o-Alaikum! For professional surveillance, we provide Hikvision ColorVu (24/7 full-color night vision) and EZVIZ smart cameras with complete 4-camera PoE NVR bundles (including 1TB/2TB WD Purple surveillance drive, pure copper Cat6 cabling, and certified installation). May I know your Full Name and Property Location so I can schedule our 100% Free On-Site Technical Site Survey for you?";
    } else if (lower.includes("network") || lower.includes("router") || lower.includes("switch") || lower.includes("wifi")) {
      reply = "Our networking division delivers structured Cat6/Cat6A cabling, enterprise WiFi 6 access points, Cisco/MikroTik routing, and managed PoE switching. Could you please share your Name and WhatsApp Contact Number so our senior network engineer can assess your requirements?";
    } else if (lower.includes("fiber") || lower.includes("optic") || lower.includes("data com")) {
      reply = "We engineer mission-critical optical fiber backbones with core fusion splicing, OTDR budget certification, and long-range point-to-point wireless bridges. What is the approximate distance and location for your fiber link?";
    } else if (lower.includes("inventory") || lower.includes("store inventory") || lower.includes("asset")) {
      reply = "Our Store Inventory & Asset Management System features live stock tracking, barcode/QR auditing, purchase order workflows, and multi-warehouse transfers. You can test the live demo anytime at: http://sm.datapointtechnology.com . Would you like a personalized walkthrough with our software architect?";
    } else if (lower.includes("invoice") || lower.includes("billing") || lower.includes("portal")) {
      reply = "Our Enterprise Invoicing Portal generates verified estimates, manages client billing, and syncs directly with our AI reception engine. You can log in at: http://invoicing.datapointtechnology.com .";
    } else if (lower.includes("price") || lower.includes("cost") || lower.includes("quote") || lower.includes("rate")) {
      reply = "Our standard 4-camera ColorVu HD system with PoE NVR and 1TB storage starts from competitive rates with official warranties. To prepare an accurate quotation for your site, could you please provide: 1) Your Name, 2) Contact Phone Number, and 3) Property Location?";
    } else {
      reply = "Assalam-o-Alaikum! I'm Moomal, AI Receptionist at DATAPOINT Technologies. How can I assist you today? You can ask about our CCTV & Security setups, Networking, Fiber Optic backbones, or our Enterprise Software (Inventory & Invoicing systems).";
    }

    if (lead_info && lead_info.phone && lead_info.name) {
      leadCaptured = true;
    }

    return NextResponse.json({
      success: true,
      reply,
      lead_captured: leadCaptured,
      engine: "Moomal Core AI Reception",
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}

