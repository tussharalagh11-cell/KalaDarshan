import { notFound } from "next/navigation";
import { yogas } from "@/lib/data";
import { RevealSection, GoldDivider, ProseKala } from "@/components/ui";
import Link from "next/link";

export async function generateStaticParams() { return yogas.map(y=>({slug:y.slug})); }
export async function generateMetadata({params}:{params:{slug:string}}) {
  const y=yogas.find(y=>y.slug===params.slug);
  return {title:`${y?.name} | Kala Darshan`};
}
export default function YogaPage({params}:{params:{slug:string}}) {
  const y=yogas.find(y=>y.slug===params.slug);
  if(!y) return notFound();
  const idx=yogas.indexOf(y); const prev=yogas[idx-1]; const next=yogas[idx+1];
  return (<>
    <section style={{minHeight:"55vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"140px 24px 80px"}}>
      <span style={{fontFamily:"'Cinzel',serif",fontSize:".58rem",letterSpacing:".45em",color:"#6a5820",marginBottom:"16px",display:"block"}}>{y.category} Yoga · {y.rarity}</span>
      <h1 style={{fontFamily:"'Cinzel Decorative',serif",fontSize:"clamp(2rem,6vw,4.5rem)",fontWeight:700,color:"#f0d878",textShadow:"0 0 60px rgba(200,168,76,.22)",letterSpacing:".05em",marginBottom:"12px"}}>{y.name}</h1>
      <div style={{fontFamily:"'Cinzel',serif",fontSize:".7rem",letterSpacing:".2em",color:"#3a5870",marginBottom:"28px"}}>{y.sanskrit}</div>
      <p style={{maxWidth:"580px",fontSize:"1.1rem",fontStyle:"italic",color:"rgba(232,240,248,.65)",lineHeight:1.9}}>{y.shortDesc}</p>
    </section>
    <GoldDivider />
    <section style={{background:"linear-gradient(to bottom,#030810,#050d1a)",padding:"80px 0 120px"}}>
      <div style={{maxWidth:"900px",margin:"0 auto",padding:"0 48px"}}>
        <RevealSection>
          <ProseKala>
            <h3>Formation Conditions</h3>
            <p>{y.formation}</p>
            <h3>Results & Manifestation</h3>
            <p>{y.results}</p>
            <h3>The Deeper Teaching</h3>
            <p>{y.depth}</p>
            <div style={{marginTop:"40px",padding:"32px",background:"rgba(200,168,76,.04)",border:"1px solid rgba(200,168,76,.12)"}}>
              <div style={{fontFamily:"'Cinzel',serif",fontSize:".58rem",letterSpacing:".25em",color:"#6a5820",marginBottom:"12px"}}>✦ WHAT MOST PRACTITIONERS MISS</div>
              <p style={{fontSize:"1rem",fontStyle:"italic",lineHeight:1.9,color:"rgba(232,240,248,.65)",marginBottom:0}}>{y.secretKnowledge}</p>
            </div>
          </ProseKala>
        </RevealSection>
        <div style={{marginTop:"60px",display:"flex",justifyContent:"space-between",borderTop:"1px solid rgba(255,255,255,.04)",paddingTop:"32px"}}>
          {prev?<Link href={`/yogas/${prev.slug}`} style={{fontFamily:"'Cinzel',serif",fontSize:".6rem",letterSpacing:".18em",color:"#6a5820",textDecoration:"none"}}>← {prev.name}</Link>:<span/>}
          {next?<Link href={`/yogas/${next.slug}`} style={{fontFamily:"'Cinzel',serif",fontSize:".6rem",letterSpacing:".18em",color:"#6a5820",textDecoration:"none"}}>{next.name} →</Link>:<span/>}
        </div>
      </div>
    </section>
  </>);
}
