import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    // Notify yourself
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Kala Darshan <dispatch@kaladarshan.com>",
        to: [process.env.CONTACT_EMAIL || "tussharalagh11@gmail.com"],
        subject: `New Dispatch Subscriber — ${name} <${email}>`,
        html: `<p style="font-family:Georgia,serif;color:#c8a84c;">New subscriber: <strong>${name}</strong> — ${email}</p>`,
      }),
    });

    // Welcome email to subscriber
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      body: JSON.stringify({
        from: "Kala Darshan <dispatch@kaladarshan.com>",
        to: [email],
        subject: "Welcome to the Kala Darshan Dispatch",
        html: `
          <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:48px 32px;background:#010208;color:#e8f0f8;">
            <h1 style="font-family:Georgia,serif;color:#c8a84c;font-size:1.4rem;letter-spacing:.15em;margin-bottom:8px;">KALA DARSHAN DISPATCH</h1>
            <div style="color:#6a5820;font-size:.8rem;letter-spacing:.2em;margin-bottom:32px;">काल दर्शन</div>
            <p style="line-height:1.9;color:rgba(232,240,248,.72);margin-bottom:20px;">Dear ${name},</p>
            <p style="line-height:1.9;color:rgba(232,240,248,.72);margin-bottom:20px;">You are now part of the Kala Darshan community — a growing circle of serious students of Jyotish and Vedic cosmology.</p>
            <p style="line-height:1.9;color:rgba(232,240,248,.72);margin-bottom:20px;">The Dispatch arrives monthly, aligned with significant lunar and planetary cycles. Each issue contains deep knowledge — not predictions or horoscopes, but the living content of the tradition: nakshatra profiles, yoga analysis, dasha timing, classical text extracts, and the metaphysical teachings that give the technical system its meaning.</p>
            <p style="line-height:1.9;color:rgba(232,240,248,.72);margin-bottom:32px;">In the meantime, the complete encyclopedia awaits at <a href="https://kaladarshan.com" style="color:#c8a84c;">kaladarshan.com</a>.</p>
            <p style="font-style:italic;color:rgba(232,240,248,.45);font-size:.9rem;line-height:1.8;">ज्योतिषां ज्योतिः तमसः परम् —<br/>The light of all lights, beyond all darkness.</p>
          </div>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
