"use client";
import { lokas } from "@/lib/data";
import { RevealSection, GoldDivider, PageHero, ProseKala } from "@/components/ui";
export default function LokasPage() {
  return (<>
    <PageHero eyebrow="THE VERTICAL COSMOS" title="THE LOKAS" subtitle="लोक · PLANES OF EXISTENCE" body="Reality is not flat. The Vedic cosmos is a vertical structure of nested planes — each operating at a distinct frequency of consciousness, each corresponding to specific houses, planets, and states of being in the birth chart. The Jyotishi who understands the Lokas reads a chart in three dimensions, not two." />
    <GoldDivider />
    <section style={{background:"linear-gradient(to bottom,#030810,#050d1a)",padding:"80px 0 120px"}}>
      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"0 48px"}}>

        {/* The cosmological principle */}
        <RevealSection>
          <div style={{marginBottom:"80px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"60px",alignItems:"center"}}>
            <ProseKala>
              <h3>The Principle of Vertical Reality</h3>
              <p>The Vedic universe is not a single flat plane of matter and event. It is a vertical structure of nested realities — each loka a distinct frequency band of consciousness, each operating by different laws, different time-scales, different possibilities.</p>
              <p>The birth chart is a <em>cross-section through all seven planes simultaneously</em>. The 12th house is the aperture toward Satya Loka. The 8th house is the window into Patala. The 5th house channels Jana Loka intelligence. The 10th house is where Bhuloka achievement becomes visible.</p>
              <p>Reading a chart as a flat document of Bhuloka events misses six-sevenths of its content. The complete reading asks: at which level of the cosmos is this planetary configuration operating? What is being processed in Patala? What grace is descending from Deva Loka? What purification is completing in Tapa Loka?</p>
              <blockquote>"The cosmos is sevenfold. The human being is sevenfold. The birth chart is sevenfold. To read it is to read all seven simultaneously."<cite>— Brihat Parashara Hora Shastra, Ch. 3</cite></blockquote>
            </ProseKala>
            <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
              {[...lokas].reverse().map((loka,i)=>(
                <div key={loka.name} style={{display:"flex",alignItems:"center",gap:"16px",padding:"12px 16px",background:`rgba(${loka.level * 10},${loka.level * 8},${loka.level * 20},.15)`,border:`1px solid ${loka.color.replace("0.6","0.15").replace("0.5","0.12").replace("0.4","0.1")}`,transition:"all .3s"}}>
                  <div style={{width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".9rem",border:`1px solid ${loka.color}`,flexShrink:0,background:"rgba(1,2,8,.8)"}}>{loka.symbol}</div>
                  <div>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:".72rem",letterSpacing:".12em",color:"#c8a84c",marginBottom:"2px"}}>{loka.name}</div>
                    <div style={{fontSize:".78rem",fontStyle:"italic",color:"rgba(232,240,248,.35)"}}>{loka.planet} · {loka.house}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Full loka entries */}
        <div style={{display:"flex",flexDirection:"column",gap:"0",position:"relative"}}>
          <div style={{position:"absolute",left:"50%",top:0,bottom:0,width:"1px",background:"linear-gradient(to bottom,transparent,#6a5820 4%,#6a5820 96%,transparent)",transform:"translateX(-50%)"}}/>
          {[...lokas].reverse().map((loka,i)=>(
            <RevealSection key={loka.name} delay={i*80}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 80px 1fr",alignItems:"start",padding:"48px 0",borderBottom:"1px solid rgba(255,255,255,.025)"}}>
                <div style={{textAlign:"right",paddingRight:"40px"}}>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:"1rem",letterSpacing:".15em",color:"#c8a84c",marginBottom:"4px"}}>{loka.name}</div>
                  <div style={{fontSize:".8rem",fontStyle:"italic",color:"rgba(232,240,248,.3)",marginBottom:"16px"}}>{loka.sanskrit}</div>
                  <div style={{fontSize:".95rem",lineHeight:1.82,color:"rgba(232,240,248,.6)",marginBottom:"16px"}}>{loka.description}</div>
                  <div style={{display:"inline-block",padding:"4px 12px",border:`1px solid ${loka.color.replace("0.6","0.25").replace("0.5","0.2").replace("0.4","0.15")}`,fontFamily:"'Cinzel',serif",fontSize:".52rem",letterSpacing:".15em",color:"#6a5820",borderRadius:"20px"}}>{loka.planet} · {loka.house}</div>
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,paddingTop:"8px"}}>
                  <div style={{width:"64px",height:"64px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",border:`1px solid ${loka.color}`,background:`radial-gradient(circle at 35% 35%,rgba(200,168,76,.08),rgba(1,2,8,.97))`,boxShadow:`0 0 24px ${loka.color.replace("0.6","0.12").replace("0.5","0.1").replace("0.4","0.08")}`,position:"relative"}}>
                    {loka.symbol}
                    <div style={{position:"absolute",inset:"-8px",borderRadius:"50%",border:`1px solid ${loka.color.replace("0.6","0.15").replace("0.5","0.12").replace("0.4","0.1")}`,animation:"orb-pulse 4s ease-in-out infinite"}}/>
                  </div>
                </div>
                <div style={{paddingLeft:"40px"}}>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:".6rem",letterSpacing:".25em",color:"#6a5820",marginBottom:"12px"}}>JYOTISH CONNECTION</div>
                  <div style={{fontSize:".95rem",lineHeight:1.82,color:"rgba(232,240,248,.55)",marginBottom:"20px"}}>{loka.jyotishConnection}</div>
                  <div style={{fontSize:".9rem",fontStyle:"italic",lineHeight:1.75,color:"rgba(232,240,248,.38)",borderLeft:"2px solid rgba(200,168,76,.12)",paddingLeft:"16px"}}>{loka.depth}</div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* The teaching */}
        <RevealSection>
          <div style={{marginTop:"80px",padding:"60px 48px",border:"1px solid rgba(200,168,76,.1)",background:"rgba(200,168,76,.02)",textAlign:"center"}}>
            <div style={{fontFamily:"'Cinzel',serif",fontSize:".6rem",letterSpacing:".35em",color:"#6a5820",marginBottom:"24px"}}>THE META-TEACHING</div>
            <p style={{fontSize:"1.2rem",fontStyle:"italic",lineHeight:2.1,color:"rgba(232,240,248,.65)",maxWidth:"680px",margin:"0 auto"}}>
              The chart maps what is happening in Bhuloka with extraordinary precision. But the Jyotishi who reads only Bhuloka events is like a physician who reads only symptoms without understanding the physiology. The <em style={{color:"#c8a84c",fontStyle:"normal"}}>cause</em> of every Bhuloka event lies in one of the higher lokas — in Maha Loka's organizing patterns, in Tapa Loka's purification processes, in Jana Loka's creative intelligence descending into form. The vertical reading of the chart is what transforms Jyotish from prediction into wisdom.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
    <style>{`@keyframes orb-pulse{0%,100%{transform:scale(1);opacity:.3;}50%{transform:scale(1.1);opacity:.7;}}`}</style>
  </>);
}
