"use client";
import { grahas } from "@/lib/data";
import { RevealSection, GoldDivider, PageHero, EncyclopediaCard } from "@/components/ui";


export default function GrahasPage() {
  return (
    <>
      <PageHero
        eyebrow="THE NINE COSMIC INTELLIGENCES"
        title="NAVA GRAHA"
        subtitle="नव ग्रह · THE NINE PLANETS"
        body="Graha means 'that which seizes.' Each planet is a focused expression of divine consciousness — a specific intelligence seizing a specific domain of existence with precise, karmic grip. Their natures extend far beyond what modern astrology teaches."
      />
      <GoldDivider />
      <section style={{ background: "linear-gradient(to bottom,#030810,#050d1a)", padding: "80px 0 120px" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 48px" }}>
          {/* Planetary friendships table */}
          <RevealSection>
            <div style={{ marginBottom: "80px", padding: "40px", background: "rgba(255,255,255,.012)", border: "1px solid rgba(255,255,255,.04)" }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".3em", color: "#6a5820", marginBottom: "24px" }}>PLANETARY FRIENDSHIP TABLE — NAISARGIKA MAITRI</div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".82rem", fontFamily: "'Cinzel',serif" }}>
                  <thead>
                    <tr>
                      <th style={{ padding: "10px 14px", textAlign: "left", color: "#6a5820", letterSpacing: ".12em", fontWeight: 400, borderBottom: "1px solid rgba(255,255,255,.04)" }}>PLANET</th>
                      {["Su","Mo","Ma","Me","Ju","Ve","Sa"].map(p => (
                        <th key={p} style={{ padding: "10px 14px", textAlign: "center", color: "#6a5820", letterSpacing: ".1em", fontWeight: 400, borderBottom: "1px solid rgba(255,255,255,.04)" }}>{p}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { p: "Sun",     row: ["—","F","F","N","F","E","E"] },
                      { p: "Moon",    row: ["F","—","N","F","N","N","N"] },
                      { p: "Mars",    row: ["F","F","—","E","F","N","E"] },
                      { p: "Mercury", row: ["F","N","N","—","N","F","N"] },
                      { p: "Jupiter", row: ["F","F","F","E","—","E","N"] },
                      { p: "Venus",   row: ["E","N","N","F","E","—","F"] },
                      { p: "Saturn",  row: ["E","E","E","F","N","F","—"] },
                    ].map(row => (
                      <tr key={row.p} style={{ borderBottom: "1px solid rgba(255,255,255,.02)" }}>
                        <td style={{ padding: "10px 14px", color: "rgba(232,240,248,.65)", letterSpacing: ".08em" }}>{row.p}</td>
                        {row.row.map((v, i) => (
                          <td key={i} style={{ padding: "10px 14px", textAlign: "center", color: v === "F" ? "#c8a84c" : v === "E" ? "#c84830" : "rgba(232,240,248,.35)", letterSpacing: ".08em" }}>
                            {v === "F" ? "Friend" : v === "E" ? "Enemy" : v === "N" ? "Neutral" : "—"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: "16px", fontSize: ".82rem", fontStyle: "italic", color: "rgba(232,240,248,.3)" }}>F = Friend · E = Enemy · N = Neutral · Temporary and compound relationships modify these natural dispositions</div>
            </div>
          </RevealSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "1px" }}>
            {grahas.map((g, i) => (
              <RevealSection key={g.slug} delay={i * 60}>
                <EncyclopediaCard href={`/grahas/${g.slug}`} title={g.name} category={`${g.sanskrit} · ${g.english}`} description={g.shortDescription} symbol={g.symbol} color={g.color} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
