"use client";
import { useState } from "react";
import { GoldDivider, PageHero, RevealSection } from "@/components/ui";

const readingTypes = [
  { id: "natal", label: "Natal Chart Reading", duration: "90 min", price: "CAD $180", desc: "Complete chart analysis: lagna, grahas, houses, yogas, dashas, and the metaphysical architecture of your specific karma." },
  { id: "transit", label: "Transit & Dasha Timing", duration: "60 min", price: "CAD $120", desc: "Current period analysis: what your active dasha-antardasha combination means, key transits, and precise timing for major decisions." },
  { id: "relationship", label: "Relationship Compatibility", duration: "90 min", price: "CAD $200", desc: "Two-chart analysis: the karmic dynamic between two charts, marriage timing, and compatibility at the level of karma rather than personality." },
  { id: "muhurta", label: "Electional Muhurta", duration: "45 min", price: "CAD $90", desc: "Selection of the most auspicious timing for a specific upcoming event: launch, marriage, surgery, travel, signing." },
];

export default function ConsultPage() {
  const [form, setForm] = useState({ name: "", email: "", dob: "", tob: "", pob: "", type: "natal", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  };

  return (<>
    <PageHero eyebrow="PERSONAL READINGS" title="CONSULT" subtitle="CHART READING · JYOTISH DARSHAN" body="A complete chart reading goes beyond prediction — into the metaphysical architecture of your specific karma, the timing of your current dasha, and the cosmic context of your present moment." />
    <GoldDivider />
    <section style={{ background: "linear-gradient(to bottom,#030810,#050d1a)", padding: "80px 0 120px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>

        {/* Reading types */}
        <RevealSection>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".35em", color: "#6a5820", marginBottom: "32px" }}>READING TYPES</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1px", marginBottom: "80px" }}>
            {readingTypes.map(r => (
              <div key={r.id} onClick={() => setForm(f => ({ ...f, type: r.id }))} style={{ padding: "32px 24px", background: form.type === r.id ? "rgba(200,168,76,.06)" : "rgba(255,255,255,.012)", border: `1px solid ${form.type === r.id ? "rgba(200,168,76,.4)" : "rgba(255,255,255,.04)"}`, cursor: "none", transition: "all .3s" }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".85rem", letterSpacing: ".1em", color: form.type === r.id ? "#c8a84c" : "rgba(232,240,248,.75)", marginBottom: "8px" }}>{r.label}</div>
                <div style={{ display: "flex", gap: "16px", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: ".58rem", letterSpacing: ".12em", color: "#6a5820" }}>{r.duration}</span>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: ".58rem", letterSpacing: ".12em", color: "#c8a84c" }}>{r.price}</span>
                </div>
                <div style={{ fontSize: ".9rem", lineHeight: 1.72, color: "rgba(232,240,248,.55)" }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Form */}
        <RevealSection>
          {status === "sent" ? (
            <div style={{ textAlign: "center", padding: "80px 40px", border: "1px solid rgba(200,168,76,.2)", background: "rgba(200,168,76,.03)" }}>
              <div style={{ fontSize: "2rem", marginBottom: "20px" }}>✦</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: "1.1rem", letterSpacing: ".15em", color: "#c8a84c", marginBottom: "12px" }}>REQUEST RECEIVED</div>
              <p style={{ fontSize: "1rem", fontStyle: "italic", color: "rgba(232,240,248,.62)", lineHeight: 1.8 }}>I will review your birth details and respond within 48 hours to confirm the reading and arrange payment.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".35em", color: "#6a5820", marginBottom: "28px" }}>BIRTH DETAILS</div>
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { key: "dob", label: "Date of Birth", type: "text", placeholder: "DD / MM / YYYY" },
                  { key: "tob", label: "Time of Birth", type: "text", placeholder: "HH:MM AM/PM (as precise as possible)" },
                  { key: "pob", label: "Place of Birth", type: "text", placeholder: "City, State, Country" },
                ].map(field => (
                  <div key={field.key} style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: ".56rem", letterSpacing: ".2em", color: "#6a5820", marginBottom: "8px" }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} value={(form as any)[field.key]} onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                      style={{ width: "100%", padding: "12px 16px", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", color: "rgba(232,240,248,.8)", fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", outline: "none", transition: "border-color .3s" }} />
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".35em", color: "#6a5820", marginBottom: "28px" }}>YOUR MESSAGE</div>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: ".56rem", letterSpacing: ".2em", color: "#6a5820", marginBottom: "8px" }}>READING TYPE</label>
                  <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                    style={{ width: "100%", padding: "12px 16px", background: "rgba(5,13,26,.95)", border: "1px solid rgba(255,255,255,.08)", color: "rgba(232,240,248,.8)", fontFamily: "'Cinzel',serif", fontSize: ".72rem", letterSpacing: ".1em", outline: "none" }}>
                    {readingTypes.map(r => <option key={r.id} value={r.id}>{r.label} — {r.price}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: "32px" }}>
                  <label style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: ".56rem", letterSpacing: ".2em", color: "#6a5820", marginBottom: "8px" }}>WHAT BRINGS YOU HERE</label>
                  <textarea rows={8} placeholder="What area of your life or chart would you like to understand more deeply? Any specific questions, concerns, or periods of life you want to explore..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ width: "100%", padding: "12px 16px", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", color: "rgba(232,240,248,.8)", fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", outline: "none", resize: "vertical" }} />
                </div>
                <button onClick={handleSubmit} disabled={status === "sending"}
                  style={{ width: "100%", padding: "18px", border: "1px solid #6a5820", background: "transparent", color: "#c8a84c", fontFamily: "'Cinzel',serif", fontSize: ".65rem", letterSpacing: ".22em", cursor: "none", transition: "all .3s", opacity: status === "sending" ? .6 : 1 }}
                  onMouseEnter={e => { if(status!=="sending"){(e.currentTarget as HTMLButtonElement).style.background="#c8a84c";(e.currentTarget as HTMLButtonElement).style.color="#010208";} }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background="transparent";(e.currentTarget as HTMLButtonElement).style.color="#c8a84c"; }}>
                  {status === "sending" ? "SENDING…" : "REQUEST A READING"}
                </button>
                {status === "error" && <p style={{ marginTop: "12px", fontSize: ".85rem", color: "#c84830", fontStyle: "italic" }}>Something went wrong. Please email directly: hello@kaladarshan.com</p>}
              </div>
            </div>
          )}
        </RevealSection>

      </div>
    </section>
  </>);
}
