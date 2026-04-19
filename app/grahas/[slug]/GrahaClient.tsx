"use client";
import { RevealSection, GoldDivider, ProseKala } from "@/components/ui";
import Link from "next/link";

export default function GrahaClient({ graha: g, prev, next }: { graha: any; prev: any; next: any }) {
  return (
    <>
      <section style={{ minHeight: "65vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "140px 24px 80px", background: "linear-gradient(to bottom,#010208,#030810)" }}>
        <div style={{ fontSize: "5rem", filter: `drop-shadow(0 0 30px ${g.color})`, marginBottom: "24px" }}>{g.symbol}</div>
        <span style={{ fontFamily: "'Cinzel',serif", fontSize: ".65rem", letterSpacing: ".45em", color: "#6a5820", marginBottom: "20px", display: "block" }}>{g.sanskrit} · {g.english} · {g.dashaYears}-YEAR MAHADASHA</span>
        <h1 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(2.5rem,8vw,5.5rem)", fontWeight: 700, color: g.color, textShadow: `0 0 60px ${g.color}40`, letterSpacing: ".06em", marginBottom: "28px" }}>{g.name.toUpperCase()}</h1>
        <p style={{ maxWidth: "580px", fontSize: "1.2rem", fontStyle: "italic", color: "rgba(240,244,248,0.95)", lineHeight: 1.9 }}>{g.shortDescription}</p>
      </section>
      <GoldDivider />
      <section style={{ background: "linear-gradient(to bottom,#030810,#050d1a)", padding: "80px 0 120px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>
          <RevealSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "1px", marginBottom: "80px" }}>
              {[
                ["Owns", g.owns.join(", ")],["Exaltation", g.exaltation],["Debilitation", g.debilitation],
                ["Mooltrikona", g.mooltrikona],["Gem", g.gem],["Metal", g.metal],
                ["Day", g.day],["Direction", g.direction],["Element", g.element],
                ["Guna", g.guna],["Kala Function", g.kala],["Dasha Length", `${g.dashaYears} Years`],
              ].map(([k, v]) => (
                <div key={k} style={{ padding: "20px 18px", background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.06)" }}>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".55rem", letterSpacing: ".2em", color: "#6a5820", marginBottom: "8px" }}>{k}</div>
                  <div style={{ fontSize: ".95rem", color: "rgba(232,240,248,.8)" }}>{v}</div>
                </div>
              ))}
            </div>
          </RevealSection>
          <RevealSection>
            <div style={{ marginBottom: "40px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {g.domains.map((d: string) => (
                <span key={d} style={{ fontFamily: "'Cinzel',serif", fontSize: ".58rem", letterSpacing: ".15em", padding: "6px 14px", border: `1px solid ${g.color}40`, color: g.color, borderRadius: "20px" }}>{d}</span>
              ))}
            </div>
          </RevealSection>
          <GoldDivider />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", marginTop: "60px" }}>
            <RevealSection>
              <ProseKala>
                <h3>Nature & Core Principle</h3>
                <p>{g.encyclopediaEntry.nature}</p>
                {g.encyclopediaEntry.combustion && <><h3>Combustion (Astangata)</h3><p>{g.encyclopediaEntry.combustion}</p></>}
                {g.encyclopediaEntry.phases && <><h3>Phases & Paksha Bala</h3><p>{g.encyclopediaEntry.phases}</p></>}
                {g.encyclopediaEntry.debilitation && <><h3>Debilitation & Neecha Bhanga</h3><p>{g.encyclopediaEntry.debilitation}</p></>}
                {g.encyclopediaEntry.retrograde && <><h3>Retrograde (Vakra)</h3><p>{g.encyclopediaEntry.retrograde}</p></>}
                {g.encyclopediaEntry.kujaDoshaDebate && <><h3>Kuja Dosha — The Real Teaching</h3><p>{g.encyclopediaEntry.kujaDoshaDebate}</p></>}
                {g.encyclopediaEntry.guruChandala && <><h3>Guru-Chandala Yoga</h3><p>{g.encyclopediaEntry.guruChandala}</p></>}
                {g.encyclopediaEntry.axisTeaching && <><h3>The Rahu-Ketu Axis</h3><p>{g.encyclopediaEntry.axisTeaching}</p></>}
                {g.encyclopediaEntry.ketuLiberation && <><h3>Moksha Karaka Function</h3><p>{g.encyclopediaEntry.ketuLiberation}</p></>}
                {g.encyclopediaEntry.ketuSaturnAntardasha && <><h3>Saturn-Ketu Antardasha</h3><p>{g.encyclopediaEntry.ketuSaturnAntardasha}</p></>}
              </ProseKala>
            </RevealSection>
            <RevealSection delay={150}>
              <ProseKala>
                {g.encyclopediaEntry.houseEffects && <><h3>House Placements</h3><p>{g.encyclopediaEntry.houseEffects}</p></>}
                {g.encyclopediaEntry.janmaNakshatra && <><h3>Janma Nakshatra</h3><p>{g.encyclopediaEntry.janmaNakshatra}</p></>}
                {g.encyclopediaEntry.dualNature && <><h3>Dual Rulership</h3><p>{g.encyclopediaEntry.dualNature}</p></>}
                {g.encyclopediaEntry.dashaEffect && <><h3>Dasha Effects</h3><p>{g.encyclopediaEntry.dashaEffect}</p></>}
                {g.encyclopediaEntry.transit && <><h3>Transit Timing</h3><p>{g.encyclopediaEntry.transit}</p></>}
                {g.encyclopediaEntry.sadeSati && <><h3>Sade Sati</h3><p>{g.encyclopediaEntry.sadeSati}</p></>}
                {g.encyclopediaEntry.kalapurusha && <><h3>Kala Purusha</h3><p>{g.encyclopediaEntry.kalapurusha}</p></>}
                {g.encyclopediaEntry.aspectsTeaching && <><h3>Special Aspects</h3><p>{g.encyclopediaEntry.aspectsTeaching}</p></>}
                {g.encyclopediaEntry.rahuKalapurusha && <><h3>Maya Purusha</h3><p>{g.encyclopediaEntry.rahuKalapurusha}</p></>}
                <div style={{ marginTop: "40px", padding: "28px 24px", background: "rgba(200,168,76,.05)", border: "1px solid rgba(200,168,76,.15)" }}>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".25em", color: "#6a5820", marginBottom: "12px" }}>✦ SECRET KNOWLEDGE</div>
                  <p style={{ fontSize: "1rem", fontStyle: "italic", lineHeight: 1.85, color: "rgba(240,244,248,0.92)", marginBottom: 0 }}>{g.encyclopediaEntry.secretKnowledge}</p>
                </div>
              </ProseKala>
            </RevealSection>
          </div>
          <RevealSection>
            <div style={{ marginTop: "80px", padding: "48px", border: "1px solid rgba(200,168,76,.12)", background: "rgba(200,168,76,.03)", textAlign: "center" }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".3em", color: "#6a5820", marginBottom: "20px" }}>BEEJA MANTRA</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(.9rem,2vw,1.2rem)", color: g.color, letterSpacing: ".15em", lineHeight: 1.8 }}>{g.mantra}</div>
            </div>
          </RevealSection>
          <div style={{ marginTop: "60px", display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,.04)", paddingTop: "32px" }}>
            {prev ? <Link href={`/grahas/${prev.slug}`} style={{ fontFamily: "'Cinzel',serif", fontSize: ".65rem", letterSpacing: ".18em", color: "#6a5820", textDecoration: "none" }}>← {prev.symbol} {prev.name}</Link> : <span />}
            {next ? <Link href={`/grahas/${next.slug}`} style={{ fontFamily: "'Cinzel',serif", fontSize: ".65rem", letterSpacing: ".18em", color: "#6a5820", textDecoration: "none" }}>{next.name} {next.symbol} →</Link> : <span />}
          </div>
        </div>
      </section>
    </>
  );
}
