import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, dob, tob, pob, type, message } = body;

    const readingLabels: Record<string,string> = {
      natal: "Natal Chart Reading — CAD $180",
      transit: "Transit & Dasha Timing — CAD $120",
      relationship: "Relationship Compatibility — CAD $200",
      muhurta: "Electional Muhurta — CAD $90",
    };

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Kala Darshan <readings@taianalytics.ai>",
        to: [process.env.CONTACT_EMAIL || "tussharalagh11@gmail.com", "kaladarshan@taianalytics.ai"],
        reply_to: email,
        subject: `New Reading Request — ${name} — ${readingLabels[type] || type}`,
        html: `
          <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:40px;background:#020810;color:#e8f0f8;">
            <h1 style="font-family:Georgia,serif;color:#c8a84c;letter-spacing:.1em;margin-bottom:32px;">NEW READING REQUEST</h1>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);color:#6a5820;font-size:.85rem;letter-spacing:.1em;width:160px;">NAME</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);">${name}</td></tr>
              <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);color:#6a5820;font-size:.85rem;letter-spacing:.1em;">EMAIL</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);"><a href="mailto:${email}" style="color:#c8a84c;">${email}</a></td></tr>
              <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);color:#6a5820;font-size:.85rem;letter-spacing:.1em;">READING</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);color:#c8a84c;">${readingLabels[type]||type}</td></tr>
              <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);color:#6a5820;font-size:.85rem;letter-spacing:.1em;">DATE OF BIRTH</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);">${dob}</td></tr>
              <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);color:#6a5820;font-size:.85rem;letter-spacing:.1em;">TIME OF BIRTH</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);">${tob}</td></tr>
              <tr><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);color:#6a5820;font-size:.85rem;letter-spacing:.1em;">PLACE OF BIRTH</td><td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,.06);">${pob}</td></tr>
            </table>
            <div style="margin-top:28px;padding:20px;background:rgba(200,168,76,.05);border-left:2px solid #6a5820;">
              <div style="color:#6a5820;font-size:.8rem;letter-spacing:.12em;margin-bottom:10px;">MESSAGE</div>
              <div style="line-height:1.8;color:rgba(232,240,248,.75);">${message || "(No message provided)"}</div>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
