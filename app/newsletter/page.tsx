"use client";
import { useState } from "react";
import { GoldDivider, RevealSection } from "@/components/ui";

const topics = [
  "Dasha timing for current planetary periods",
  "Deep nakshatra profiles — one per issue",
  "Yoga identification and activation",
  "Transit analysis for significant upcoming periods",
  "Classical text extracts with modern interpretation",
  "Ashtakavarga practical applications",
  "The metaphysical teachings behind technical concepts",
];

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, name }) });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <section style={{ minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "140px 24px 80px" }}>
        <span style={{ fontFamily: "'Cinzel',serif", fontSize: ".58rem", letterSpacing: ".45em", color: "#6a5820", marginBottom: "20px", display: "block" }}>THE LIVING KNOWLEDGE</span>
        <h1 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 700, color: "#f0d878", textShadow: "0 0 60px rgba(200,168,76,.2)", letterSpacing: ".04em", marginBottom: "24px" }}>
          KALA DARSHAN DISPATCH
          <span style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: ".3em", letterSpacing: ".35em", color: "#3a5870", marginTop: "18px", fontWeight: 400, textShadow: "none" }}>MONTHLY DISPATCH</span>
        </h1>
        <p style={{ maxWidth: "540px", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(232,240,248,.62)", lineHeight: 1.95 }}>
          Deep Jyotish knowledge delivered with the seriousness and precision the tradition deserves. Not predictions. Not horoscopes. The living knowledge that makes Jyotish a complete cosmological science.
        </p>
      </section>
      <GoldDivider />
      <section style={{ background: "linear-gradient(to bottom,#030810,#050d1a)", padding: "80px 0 120px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <RevealSection>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".35em", color: "#6a5820", marginBottom: "24px" }}>WHAT YOU RECEIVE</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {topics.map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,.03)", alignItems: "flex-start" }}>
                    <span style={{ color: "#6a5820", fontFamily: "'Cinzel',serif", fontSize: ".7rem", flexShrink: 0, marginTop: "2px" }}>✦</span>
                    <span style={{ fontSize: ".98rem", color: "rgba(232,240,248,.62)", lineHeight: 1.6 }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "32px", padding: "24px", background: "rgba(200,168,76,.03)", border: "1px solid rgba(200,168,76,.1)" }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".58rem", letterSpacing: ".2em", color: "#6a5820", marginBottom: "10px" }}>FREQUENCY</div>
                <div style={{ fontSize: ".95rem", fontStyle: "italic", color: "rgba(232,240,248,.55)", lineHeight: 1.7 }}>Monthly — aligned with significant lunar or planetary cycles where possible. Quality over frequency.</div>
              </div>
            </RevealSection>
            <RevealSection delay={150}>
              {status === "sent" ? (
                <div style={{ padding: "60px 40px", border: "1px solid rgba(200,168,76,.2)", background: "rgba(200,168,76,.03)", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "20px" }}>✦</div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: "1rem", letterSpacing: ".15em", color: "#c8a84c", marginBottom: "12px" }}>WELCOME</div>
                  <p style={{ fontSize: ".95rem", fontStyle: "italic", color: "rgba(232,240,248,.58)", lineHeight: 1.8 }}>You are now part of the Kala Darshan community. The first dispatch arrives at the next lunar cycle milestone.</p>
                </div>
              ) : (
                <>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".35em", color: "#6a5820", marginBottom: "28px" }}>JOIN THE DISPATCH</div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: ".56rem", letterSpacing: ".2em", color: "#6a5820", marginBottom: "8px" }}>YOUR NAME</label>
                    <input type="text" placeholder="How shall we address you" value={name} onChange={e => setName(e.target.value)}
                      style={{ width: "100%", padding: "14px 16px", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", color: "rgba(232,240,248,.8)", fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", outline: "none" }} />
                  </div>
                  <div style={{ marginBottom: "32px" }}>
                    <label style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: ".56rem", letterSpacing: ".2em", color: "#6a5820", marginBottom: "8px" }}>EMAIL ADDRESS</label>
                    <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
                      style={{ width: "100%", padding: "14px 16px", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", color: "rgba(232,240,248,.8)", fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", outline: "none" }} />
                  </div>
                  <button onClick={handleSubmit} disabled={status === "sending"}
                    style={{ width: "100%", padding: "18px", border: "1px solid #6a5820", background: "transparent", color: "#c8a84c", fontFamily: "'Cinzel',serif", fontSize: ".65rem", letterSpacing: ".22em", cursor: "none", transition: "all .3s", opacity: status === "sending" ? .6 : 1 }}
                    onMouseEnter={e => { if(status!=="sending"){(e.currentTarget as HTMLButtonElement).style.background="#c8a84c";(e.currentTarget as HTMLButtonElement).style.color="#010208";} }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background="transparent";(e.currentTarget as HTMLButtonElement).style.color="#c8a84c"; }}>
                    {status === "sending" ? "JOINING…" : "JOIN THE DISPATCH"}
                  </button>
                  {status === "error" && <p style={{ marginTop: "12px", fontSize: ".85rem", color: "#c84830", fontStyle: "italic" }}>Something went wrong. Please try again.</p>}
                  <p style={{ marginTop: "16px", fontSize: ".78rem", fontStyle: "italic", color: "rgba(232,240,248,.28)", lineHeight: 1.6 }}>No spam. Unsubscribe at any time. Your data is never shared.</p>
                </>
              )}
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  );
}
