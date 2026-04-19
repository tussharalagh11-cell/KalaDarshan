"use client";
import { RevealSection, GoldDivider, ProseKala } from "@/components/ui";
import Link from "next/link";

export default function YogaClient({ yoga: y, prev, next }: { yoga: any; prev: any; next: any }) {
  return (
    <>
      <section style={{ minHeight: "55vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "140px 24px 80px", background: "linear-gradient(to bottom,#010208,#030810)" }}>
        <span style={{ fontFamily: "'Cinzel',serif", fontSize: ".65rem", letterSpacing: ".45em", color: "#6a5820", marginBottom: "16px", display: "block" }}>{y.category.toUpperCase()} YOGA · {y.rarity}</span>
        <h1 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(2rem,6vw,4.5rem)", fontWeight: 700, color: "#f0d878", textShadow: "0 0 60px rgba(200,168,76,.22)", letterSpacing: ".05em", marginBottom: "12px" }}>{y.name}</h1>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".72rem", letterSpacing: ".2em", color: "#3a5870", marginBottom: "28px" }}>{y.sanskrit}</div>
        <p style={{ maxWidth: "600px", fontSize: "1.15rem", fontStyle: "italic", color: "rgba(232,240,248,.82)", lineHeight: 1.9 }}>{y.shortDesc}</p>
      </section>
      <GoldDivider />
      <section style={{ background: "linear-gradient(to bottom,#030810,#050d1a)", padding: "80px 0 120px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 48px" }}>
          <RevealSection>
            <ProseKala>
              <h3>Formation Conditions</h3>
              <p>{y.formation}</p>
              <h3>Results & Manifestation</h3>
              <p>{y.results}</p>
              <h3>The Deeper Teaching</h3>
              <p>{y.depth}</p>
              <div style={{ marginTop: "40px", padding: "32px", background: "rgba(200,168,76,.05)", border: "1px solid rgba(200,168,76,.15)" }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".25em", color: "#6a5820", marginBottom: "12px" }}>✦ WHAT MOST PRACTITIONERS MISS</div>
                <p style={{ fontSize: "1rem", fontStyle: "italic", lineHeight: 1.9, color: "rgba(232,240,248,.75)", marginBottom: 0 }}>{y.secretKnowledge}</p>
              </div>
            </ProseKala>
          </RevealSection>
          <div style={{ marginTop: "60px", display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,.04)", paddingTop: "32px" }}>
            {prev ? <Link href={`/yogas/${prev.slug}`} style={{ fontFamily: "'Cinzel',serif", fontSize: ".65rem", letterSpacing: ".18em", color: "#6a5820", textDecoration: "none" }}>← {prev.name}</Link> : <span />}
            {next ? <Link href={`/yogas/${next.slug}`} style={{ fontFamily: "'Cinzel',serif", fontSize: ".65rem", letterSpacing: ".18em", color: "#6a5820", textDecoration: "none" }}>{next.name} →</Link> : <span />}
          </div>
        </div>
      </section>
    </>
  );
}
