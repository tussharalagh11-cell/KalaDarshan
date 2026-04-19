"use client";
import { nakshatras } from "@/lib/data";
import { RevealSection, GoldDivider, PageHero } from "@/components/ui";
import Link from "next/link";


export default function NakshatrasPage() {
  return (
    <>
      <PageHero
        eyebrow="THE 27 LUNAR MANSIONS"
        title="NAKSHATRAS"
        subtitle="नक्षत्र · STELLAR ABODES OF THE MOON"
        body="The zodiac of 27 lunar mansions — the Moon's nightly stations as she moves through the sky. Each nakshatra is a complete universe: a deity, a symbol, a motivation, a quality of cosmic intelligence. The Moon's nakshatra at birth is the signature of your mind."
      />
      <GoldDivider />
      <section style={{ background: "linear-gradient(to bottom,#030810,#050d1a)", padding: "80px 0 120px" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 48px" }}>
          <RevealSection>
            <div style={{ marginBottom: "60px", padding: "36px 40px", background: "rgba(255,255,255,.012)", border: "1px solid rgba(255,255,255,.04)" }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".3em", color: "#6a5820", marginBottom: "20px" }}>THE DASHA LORDS — NAKSHATRA-PLANET RULERSHIP CYCLE</div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {[["Ketu","#b06840"],["Venus","#e0a868"],["Sun","#f0c040"],["Moon","#c8e0f8"],["Mars","#c84830"],["Rahu","#9060b0"],["Jupiter","#e8c060"],["Saturn","#6880a8"],["Mercury","#60c880"]].map(([p,c])=>(
                  <div key={p} style={{ padding: "8px 16px", border: `1px solid ${c}30`, borderRadius: "20px" }}>
                    <span style={{ fontFamily: "'Cinzel',serif", fontSize: ".58rem", letterSpacing: ".12em", color: c as string }}>{p}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: "16px", fontSize: ".88rem", fontStyle: "italic", color: "rgba(232,240,248,.4)", lineHeight: 1.7 }}>The 9 planets rule the 27 nakshatras in a fixed cycle of 3 each. The Moon's nakshatra at birth determines the starting point in the 120-year Vimshottari Dasha cycle.</p>
            </div>
          </RevealSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {nakshatras.map((n, i) => (
              <RevealSection key={n.name} delay={Math.min(i * 30, 400)}>
                <Link href={`/nakshatras/${n.num}`} style={{ display: "block", textDecoration: "none" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "50px 200px 120px 1fr 100px", gap: "24px", alignItems: "center", padding: "20px 24px", background: "rgba(255,255,255,.01)", borderLeft: "2px solid transparent", transition: "all .3s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#c8a84c"; (e.currentTarget as HTMLDivElement).style.background = "rgba(200,168,76,.03)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,.01)"; }}
                  >
                    <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".62rem", color: "#6a5820" }}>{String(n.num).padStart(2, "0")}</div>
                    <div>
                      <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".88rem", letterSpacing: ".1em", color: "rgba(232,240,248,.75)", marginBottom: "2px" }}>{n.name}</div>
                      <div style={{ fontSize: ".75rem", fontStyle: "italic", color: "rgba(232,240,248,.3)" }}>{n.sanskrit}</div>
                    </div>
                    <div style={{ fontSize: ".8rem", color: "rgba(232,240,248,.4)" }}>{n.ruler} · {n.deity}</div>
                    <div style={{ fontSize: ".88rem", color: "rgba(232,240,248,.52)", lineHeight: 1.5 }}>{n.shortDesc}</div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ fontFamily: "'Cinzel',serif", fontSize: ".52rem", letterSpacing: ".15em", color: "#6a5820", padding: "4px 10px", border: "1px solid rgba(200,168,76,.15)", borderRadius: "12px" }}>{n.guna}</span>
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
