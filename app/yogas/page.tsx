"use client";
// app/yogas/page.tsx
import { yogas } from "@/lib/data";
import { RevealSection, GoldDivider, PageHero, EncyclopediaCard } from "@/components/ui";
export default function YogasPage() {
  return (<>
    <PageHero eyebrow="HIDDEN COMBINATIONS" title="YOGAS" subtitle="योग · PLANETARY CONSPIRACIES" body="A yoga is a planetary combination producing results beyond the sum of its parts. Most charts contain yogas the native never discovers. This is Jyotish's secret knowledge — not what planets mean individually, but what they produce when they conspire." />
    <GoldDivider />
    <section style={{background:"linear-gradient(to bottom,#030810,#050d1a)",padding:"80px 0 120px"}}>
      <div style={{maxWidth:"1160px",margin:"0 auto",padding:"0 48px"}}>
        <RevealSection>
          <div style={{padding:"36px 40px",background:"rgba(255,255,255,.012)",border:"1px solid rgba(255,255,255,.04)",marginBottom:"60px"}}>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:".6rem",letterSpacing:".3em",color:"#6a5820",marginBottom:"16px"}}>THE CARDINAL RULE OF YOGA ACTIVATION</div>
            <p style={{fontSize:"1rem",lineHeight:1.9,color:"rgba(232,240,248,.62)",fontStyle:"italic"}}>A yoga in the natal chart is potential, not destiny. It requires three conditions for manifestation: (1) the yoga must be clearly formed in the natal chart, (2) the Mahadasha or Antardasha of a participating planet must be active, and (3) a supporting transit must trigger the configuration. The most extraordinary yogas in a chart may never manifest if the relevant dashas occur in infancy or extreme old age. The yoga creates the seed; the dasha-transit nexus creates the flowering.</p>
          </div>
        </RevealSection>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:"1px"}}>
          {yogas.map((y,i)=>(
            <RevealSection key={y.slug} delay={i*80}>
              <EncyclopediaCard href={`/yogas/${y.slug}`} title={y.name} category={y.category} description={y.shortDesc} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  </>);
}
