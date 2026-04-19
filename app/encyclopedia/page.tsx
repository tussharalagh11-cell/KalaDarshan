"use client";
import { encyclopediaTopics, grahas, nakshatras, yogas, lokas } from "@/lib/data";
import { RevealSection, GoldDivider, PageHero, EncyclopediaCard } from "@/components/ui";
import Link from "next/link";

const categories = ["Technical","Philosophy","Classical Texts","Practice"];

export default function EncyclopediaPage() {
  return (<>
    <PageHero eyebrow="THE COMPLETE KNOWLEDGE" title="ENCYCLOPEDIA" subtitle="ज्ञान · THE LIVING LIBRARY" body="Every concept in Jyotish and Vedic cosmology — assembled with the depth and precision the tradition deserves. From Ashtakavarga to Purusha-Prakriti, from Muhurta to the Maha Yugas. Knowledge that has never been assembled in one place." />
    <GoldDivider />
    <section style={{background:"linear-gradient(to bottom,#030810,#050d1a)",padding:"80px 0 120px"}}>
      <div style={{maxWidth:"1160px",margin:"0 auto",padding:"0 48px"}}>

        {/* Quick navigation */}
        <RevealSection>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"60px"}}>
            {["All","Grahas","Nakshatras","Yogas","Dashas","Lokas",...categories].map(cat=>(
              <a key={cat} href={`#${cat.toLowerCase()}`} style={{fontFamily:"'Cinzel',serif",fontSize:".58rem",letterSpacing:".18em",padding:"8px 18px",border:"1px solid rgba(200,168,76,.2)",color:"rgba(232,240,248,.5)",textDecoration:"none",borderRadius:"20px",transition:"all .3s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.borderColor="#c8a84c";(e.currentTarget as HTMLAnchorElement).style.color="#c8a84c";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.borderColor="rgba(200,168,76,.2)";(e.currentTarget as HTMLAnchorElement).style.color="rgba(232,240,248,.5)";}}>
                {cat}
              </a>
            ))}
          </div>
        </RevealSection>

        {/* Grahas */}
        <section id="grahas" style={{marginBottom:"80px"}}>
          <RevealSection>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"32px"}}>
              <span className="eyebrow">NAVA GRAHA · THE NINE PLANETS</span>
              <Link href="/grahas" style={{fontFamily:"'Cinzel',serif",fontSize:".55rem",letterSpacing:".18em",color:"#6a5820",textDecoration:"none"}}>VIEW ALL →</Link>
            </div>
          </RevealSection>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"1px"}}>
            {grahas.map((g,i)=>(
              <RevealSection key={g.slug} delay={i*40}>
                <EncyclopediaCard href={`/grahas/${g.slug}`} title={g.name} category={g.english} description={g.shortDescription.slice(0,100)+"…"} symbol={g.symbol} color={g.color} />
              </RevealSection>
            ))}
          </div>
        </section>

        <GoldDivider />

        {/* Nakshatras */}
        <section id="nakshatras" style={{margin:"80px 0"}}>
          <RevealSection>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"32px"}}>
              <span className="eyebrow">NAKSHATRA · 27 LUNAR MANSIONS</span>
              <Link href="/nakshatras" style={{fontFamily:"'Cinzel',serif",fontSize:".55rem",letterSpacing:".18em",color:"#6a5820",textDecoration:"none"}}>VIEW ALL →</Link>
            </div>
          </RevealSection>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"1px"}}>
            {nakshatras.map((n,i)=>(
              <RevealSection key={n.name} delay={Math.min(i*25,500)}>
                <EncyclopediaCard href={`/nakshatras/${n.num}`} title={n.name} category={`${n.ruler} · ${n.deity}`} description={n.shortDesc} symbol={String(n.num).padStart(2,"0")} />
              </RevealSection>
            ))}
          </div>
        </section>

        <GoldDivider />

        {/* Yogas */}
        <section id="yogas" style={{margin:"80px 0"}}>
          <RevealSection>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"32px"}}>
              <span className="eyebrow">YOGA · PLANETARY COMBINATIONS</span>
              <Link href="/yogas" style={{fontFamily:"'Cinzel',serif",fontSize:".55rem",letterSpacing:".18em",color:"#6a5820",textDecoration:"none"}}>VIEW ALL →</Link>
            </div>
          </RevealSection>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"1px"}}>
            {yogas.map((y,i)=>(
              <RevealSection key={y.slug} delay={i*70}>
                <EncyclopediaCard href={`/yogas/${y.slug}`} title={y.name} category={y.category} description={y.shortDesc} />
              </RevealSection>
            ))}
          </div>
        </section>

        <GoldDivider />

        {/* Deep topics */}
        {categories.map(cat=>(
          <section id={cat.toLowerCase()} key={cat} style={{margin:"80px 0"}}>
            <RevealSection>
              <span className="eyebrow">{cat.toUpperCase()} · ADVANCED KNOWLEDGE</span>
            </RevealSection>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"1px",marginTop:"24px"}}>
              {encyclopediaTopics.filter(t=>t.category===cat).map((t,i)=>(
                <RevealSection key={t.slug} delay={i*70}>
                  <EncyclopediaCard href={`/encyclopedia/${t.slug}`} title={t.title} category={t.category} description={t.description} />
                </RevealSection>
              ))}
            </div>
          </section>
        ))}

      </div>
    </section>
  </>);
}
