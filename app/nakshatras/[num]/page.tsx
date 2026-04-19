import { notFound } from "next/navigation";
import { nakshatras } from "@/lib/data";
import { RevealSection, GoldDivider, ProseKala } from "@/components/ui";
import Link from "next/link";

export async function generateStaticParams() {
  return nakshatras.map(n => ({ num: String(n.num) }));
}
export async function generateMetadata({ params }: { params: { num: string } }) {
  const n = nakshatras.find(n => n.num === parseInt(params.num));
  return { title: `${n?.name} Nakshatra | Kala Darshan` };
}

export default function NakshatraPage({ params }: { params: { num: string } }) {
  const n = nakshatras.find(n => n.num === parseInt(params.num));
  if (!n) return notFound();
  const prev = nakshatras[n.num - 2];
  const next = nakshatras[n.num];

  return (
    <>
      <section style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "140px 24px 80px" }}>
        <span style={{ fontFamily: "'Cinzel',serif", fontSize: ".58rem", letterSpacing: ".45em", color: "#6a5820", marginBottom: "20px", display: "block" }}>NAKSHATRA {String(n.num).padStart(2,"0")} OF 27 · {n.degrees}</span>
        <h1 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(2.5rem,8vw,5.5rem)", fontWeight: 700, color: "#f0d878", textShadow: "0 0 60px rgba(200,168,76,.22)", letterSpacing: ".06em", marginBottom: "16px" }}>{n.name.toUpperCase()}</h1>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".7rem", letterSpacing: ".2em", color: "#3a5870", marginBottom: "32px" }}>{n.sanskrit} · {n.ruler} · {n.deity}</div>
        <p style={{ maxWidth: "560px", fontSize: "1.15rem", fontStyle: "italic", color: "rgba(232,240,248,.65)", lineHeight: 1.9 }}>{n.shortDesc}</p>
      </section>
      <GoldDivider />
      <section style={{ background: "linear-gradient(to bottom,#030810,#050d1a)", padding: "80px 0 120px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 48px" }}>
          <RevealSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: "1px", marginBottom: "60px" }}>
              {[
                ["Nakshatra Ruler",n.ruler],["Presiding Deity",n.deity],["Symbol",n.symbol],
                ["Guna",n.guna],["Motivation",n.motivation],["Degrees",n.degrees],
              ].map(([k,v])=>(
                <div key={k} style={{ padding: "20px 18px", background: "rgba(255,255,255,.015)", border: "1px solid rgba(255,255,255,.04)" }}>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".52rem", letterSpacing: ".2em", color: "#6a5820", marginBottom: "6px" }}>{k}</div>
                  <div style={{ fontSize: ".9rem", color: "rgba(232,240,248,.65)" }}>{v}</div>
                </div>
              ))}
            </div>
          </RevealSection>
          <RevealSection>
            <ProseKala>
              <h3>The Nature of {n.name}</h3>
              <p>{n.body}</p>
              <h3>The Presiding Deity — {n.deity}</h3>
              <p>The deity {n.deity} governs this nakshatra's core intelligence — revealing not just the personality traits of natives born under {n.name}, but the cosmic function this mansion serves in the larger zodiacal circuit. Every nakshatra is a station where the Moon performs a specific function in its monthly journey. The deity reveals what that function is.</p>
              <h3>The Symbol — {n.symbol}</h3>
              <p>The symbol is not decorative — it is a yantra, a geometric encoding of the nakshatra's core principle. Meditating on the symbol of one's Janma Nakshatra is one of the classical Jyotish practices for connecting with the nakshatra's intelligence directly, beyond the mediation of intellectual understanding.</p>
              <h3>Planets in {n.name}</h3>
              <p>Any planet placed in {n.name} at birth expresses its significations through the qualities of this nakshatra. The Moon here produces its maximum {n.name} expression. The Sun here illuminates the soul through {n.name}'s principle. Saturn here crystallizes karma through {n.deity}'s domain. Understanding the nakshatra of every planet in the natal chart is the layer of Jyotish analysis that most practitioners only partially utilize.</p>
              <h3>The Pada System</h3>
              <p>Each nakshatra is divided into 4 padas (quarters) of 3°20' each, corresponding to the four signs beginning with Aries. The pada of a planet refines its expression: the first pada gives an Aries quality (initiative, independence), the second a Taurus quality (stability, material focus), the third a Gemini quality (communication, duality), the fourth a Cancer quality (depth, emotion, home). For {n.name}, the padas fall in {n.degrees.split("°")[0]}–specific degrees in specific signs.</p>
              <blockquote>
                "The nakshatras are the wives of the Moon — each has a distinct relationship with the lunar intelligence, a distinct way of receiving and reflecting the Moon's light."
                <cite>— Parashara, Brihat Parashara Hora Shastra</cite>
              </blockquote>
            </ProseKala>
          </RevealSection>
          <div style={{ marginTop: "60px", display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,.04)", paddingTop: "32px" }}>
            {prev ? <Link href={`/nakshatras/${prev.num}`} style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".18em", color: "#6a5820", textDecoration: "none" }}>← {prev.name}</Link> : <span />}
            {next ? <Link href={`/nakshatras/${next.num}`} style={{ fontFamily: "'Cinzel',serif", fontSize: ".6rem", letterSpacing: ".18em", color: "#6a5820", textDecoration: "none" }}>{next.name} →</Link> : <span />}
          </div>
        </div>
      </section>
    </>
  );
}
