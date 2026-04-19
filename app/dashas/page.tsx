"use client";
import { dashas } from "@/lib/data";
import { RevealSection, GoldDivider, PageHero } from "@/components/ui";
export default function DashasPage() {
  return (<>
    <PageHero eyebrow="THE RIVER OF TIME" title="VIMSHOTTARI DASHA" subtitle="विंशोत्तरी दशा · 120-YEAR PLANETARY CYCLE" body="Time is not uniform. It has a texture, a ruler, a quality. The Vimshottari system divides the 120-year human lifespan into planetary periods — each governed by a specific graha whose natal condition fully expresses. The same external event in different dashas produces entirely different inner and outer results." />
    <GoldDivider />
    <section style={{background:"linear-gradient(to bottom,#030810,#050d1a)",padding:"80px 0 120px"}}>
      <div style={{maxWidth:"1000px",margin:"0 auto",padding:"0 48px"}}>
        <RevealSection>
          <div style={{marginBottom:"60px",padding:"36px 40px",background:"rgba(255,255,255,.012)",border:"1px solid rgba(255,255,255,.04)"}}>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:".6rem",letterSpacing:".3em",color:"#6a5820",marginBottom:"16px"}}>HOW THE DASHA IS CALCULATED</div>
            <p style={{fontSize:"1rem",lineHeight:1.9,color:"rgba(240,244,248,0.88)",fontStyle:"italic",marginBottom:"16px"}}>The starting dasha is determined by the Moon's nakshatra at birth and the exact degree within that nakshatra. The remaining balance of the nakshatra ruler's dasha is calculated proportionally. From that starting point, the nine planets cycle in the fixed Vimshottari sequence: Ketu, Venus, Sun, Moon, Mars, Rahu, Jupiter, Saturn, Mercury — then returning to Ketu for the next cycle.</p>
            <p style={{fontSize:".9rem",lineHeight:1.8,color:"rgba(240,244,248,0.72)",fontStyle:"italic"}}>Each Mahadasha is subdivided into nine Antardashas (sub-periods) in the same sequence, beginning with the Mahadasha lord itself. Within Antardashas, further subdivision into Pratyantardashas is possible — creating extraordinary precision for timing specific events to within weeks.</p>
          </div>
        </RevealSection>

        {/* Full timeline */}
        <div style={{position:"relative",paddingLeft:"40px"}}>
          <div style={{position:"absolute",left:0,top:0,bottom:0,width:"1px",background:"linear-gradient(to bottom,transparent,#6a5820 6%,#6a5820 94%,transparent)"}}/>
          {dashas.map((d,i)=>(
            <RevealSection key={d.planet} delay={i*60}>
              <div style={{position:"relative",display:"grid",gridTemplateColumns:"200px 1fr",gap:"48px",padding:"48px 0",borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                <div style={{position:"absolute",left:"-45px",top:"56px",width:"10px",height:"10px",borderRadius:"50%",background:"#010208",border:`1px solid ${d.color}`,boxShadow:`0 0 10px ${d.color}40`}}/>
                <div>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:".62rem",letterSpacing:".2em",color:"#6a5820",marginBottom:"8px"}}>{d.planet.toUpperCase()} MAHADASHA</div>
                  <div style={{fontSize:"3rem",color:d.color,lineHeight:1,marginBottom:"6px",fontFamily:"'Cinzel',serif"}}>{d.years}</div>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:".58rem",letterSpacing:".15em",color:"rgba(232,240,248,.25)"}}>YEARS</div>
                  <div style={{marginTop:"16px",display:"flex",flexWrap:"wrap",gap:"4px"}}>
                    {d.innerDashas.map(ad=>(
                      <span key={ad} style={{fontFamily:"'Cinzel',serif",fontSize:".48rem",letterSpacing:".1em",padding:"3px 8px",border:"1px solid rgba(255,255,255,.05)",color:"rgba(232,240,248,.3)",borderRadius:"12px"}}>{ad}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:"1.1rem",color:"rgba(240,244,248,0.95)",marginBottom:"14px",letterSpacing:".08em"}}>{d.essence}</div>
                  <div style={{fontSize:"1rem",lineHeight:1.9,color:"rgba(232,240,248,.6)",marginBottom:"20px"}}>{d.description}</div>
                  <div style={{padding:"20px 24px",background:"rgba(200,168,76,.03)",borderLeft:"2px solid rgba(200,168,76,.15)"}}>
                    <div style={{fontSize:".9rem",fontStyle:"italic",lineHeight:1.8,color:"rgba(232,240,248,.5)"}}>{d.depth}</div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection>
          <div style={{marginTop:"80px",padding:"48px",border:"1px solid rgba(200,168,76,.1)",background:"rgba(200,168,76,.02)",textAlign:"center"}}>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:".6rem",letterSpacing:".35em",color:"#6a5820",marginBottom:"20px"}}>THE ANTARDASHA WITHIN SATURN MAHADASHA</div>
            <p style={{fontSize:"1.05rem",fontStyle:"italic",lineHeight:2,color:"rgba(240,244,248,0.88)",maxWidth:"680px",margin:"0 auto"}}>
              Within Saturn's 19-year Mahadasha, each of the nine planets rules a sub-period. <em style={{color:"#c8a84c",fontStyle:"normal"}}>Saturn-Ketu</em> produces maximum dissolution of false crystallizations. <em style={{color:"#c8a84c",fontStyle:"normal"}}>Saturn-Venus</em> is the activation of what was crystallized — the moment the 7th lord delivers from Patala into Bhuloka. <em style={{color:"#c8a84c",fontStyle:"normal"}}>Saturn-Jupiter</em> produces the harvest of whatever dharmic structure was built. Each antardasha is a complete chapter within the larger Saturn novel.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  </>);
}
