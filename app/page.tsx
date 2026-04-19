"use client";
import Link from "next/link";
import { grahas, nakshatras, yogas, lokas, dashas } from "@/lib/data";
import { RevealSection, GoldDivider, EncyclopediaCard } from "@/components/ui";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"120px 24px 80px"}}>
        <div style={{fontFamily:"'Cinzel',serif",fontSize:".58rem",letterSpacing:".5em",color:"#6a5820",marginBottom:"40px",animation:"fade-up 2s ease both"}}>
          JYOTISH · VEDIC COSMOLOGY · THE LIVING COSMOS
        </div>
        <h1 style={{fontFamily:"'Cinzel Decorative',serif",fontSize:"clamp(3rem,11vw,8.5rem)",fontWeight:700,lineHeight:.9,color:"#f0d878",textShadow:"0 0 80px rgba(200,168,76,.22),0 0 200px rgba(200,168,76,.07)",animation:"fade-up 2s .2s ease both",letterSpacing:".04em"}}>
          KALA<br/>DARSHAN
          <span style={{display:"block",fontFamily:"'Cinzel',serif",fontSize:".28em",letterSpacing:".4em",color:"#3a5870",marginTop:"24px",fontWeight:400,textShadow:"none"}}>काल दर्शन · VISION OF COSMIC TIME</span>
        </h1>
        <p style={{marginTop:"56px",maxWidth:"580px",fontSize:"clamp(1.05rem,2vw,1.3rem)",fontStyle:"italic",color:"rgba(232,240,248,.65)",lineHeight:1.9,animation:"fade-up 2s .5s ease both"}}>
          The planets do not <em style={{color:"#c8a84c",fontStyle:"normal"}}>cause</em> your life.<br/>
          They reveal what is already written<br/>
          in the deep grammar of your karma.
        </p>
        <div style={{marginTop:"80px",display:"flex",gap:"20px",flexWrap:"wrap",justifyContent:"center",animation:"fade-up 2s .8s ease both"}}>
          <Link href="/encyclopedia" style={{fontFamily:"'Cinzel',serif",fontSize:".65rem",letterSpacing:".22em",padding:"14px 32px",border:"1px solid #6a5820",color:"#c8a84c",textDecoration:"none",transition:"all .3s"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#c8a84c";(e.currentTarget as HTMLAnchorElement).style.color="#010208";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background="transparent";(e.currentTarget as HTMLAnchorElement).style.color="#c8a84c";}}>
            ENTER THE ENCYCLOPEDIA
          </Link>
          <Link href="/consult" style={{fontFamily:"'Cinzel',serif",fontSize:".65rem",letterSpacing:".22em",padding:"14px 32px",border:"1px solid rgba(255,255,255,.08)",color:"rgba(232,240,248,.5)",textDecoration:"none",transition:"all .3s"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.borderColor="rgba(232,240,248,.2)";(e.currentTarget as HTMLAnchorElement).style.color="rgba(232,240,248,.8)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.borderColor="rgba(255,255,255,.08)";(e.currentTarget as HTMLAnchorElement).style.color="rgba(232,240,248,.5)";}}>
            BOOK A READING
          </Link>
        </div>
        <div style={{marginTop:"90px",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",animation:"fade-up 2s 1.1s ease both"}}>
          <span style={{fontFamily:"'Cinzel',serif",fontSize:".52rem",letterSpacing:".4em",color:"#6a5820"}}>BEGIN THE DESCENT</span>
          <div style={{width:"1px",height:"64px",background:"linear-gradient(to bottom,#6a5820,transparent)",animation:"breathe 2.5s ease-in-out infinite"}}/>
        </div>
      </section>

      <GoldDivider />

      {/* OPENING VERSE */}
      <RevealSection>
        <section style={{background:"linear-gradient(to bottom,#010208,#030810)"}}>
          <div style={{maxWidth:"780px",margin:"0 auto",textAlign:"center",padding:"120px 40px"}}>
            <p style={{fontSize:"clamp(1.3rem,3vw,2rem)",fontStyle:"italic",lineHeight:2.2,color:"rgba(232,240,248,.68)"}}>
              "The entire cosmos is a single organism.<br/>
              <em style={{color:"#f0d878",fontStyle:"normal",display:"block",fontSize:"1.15em",margin:"16px 0"}}>You are not in it. It is in you.</em>
              The birth chart is not a map of your fate —<br/>
              it is a mirror of your consciousness<br/>
              at the moment it chose to descend into form."
            </p>
            <div style={{marginTop:"36px",fontFamily:"'Cinzel',serif",fontSize:".6rem",letterSpacing:".3em",color:"#6a5820"}}>PARASHARA · BRIHAT PARASHARA HORA SHASTRA</div>
          </div>
        </section>
      </RevealSection>

      <GoldDivider />

      {/* GRAHAS PREVIEW */}
      <section style={{background:"linear-gradient(to bottom,#030810,#050d1a)",padding:"120px 0"}}>
        <div style={{maxWidth:"1160px",margin:"0 auto",padding:"0 48px"}}>
          <RevealSection>
            <span className="eyebrow">I — THE NINE COSMIC INTELLIGENCES</span>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:600,color:"#c8a84c",marginBottom:"16px"}}>Nava Graha</h2>
            <p style={{fontSize:"1.1rem",fontStyle:"italic",color:"rgba(232,240,248,.65)",lineHeight:1.95,maxWidth:"700px",marginBottom:"60px"}}>
              Graha means "that which seizes." Each planet is a cosmic intelligence — a focused expression of divine consciousness seizing a specific domain of human existence with precise, karmic grip. Their natures go far beyond what modern astrology teaches.
            </p>
          </RevealSection>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"1px"}}>
            {grahas.map((g,i)=>(
              <RevealSection key={g.slug} delay={i*60}>
                <EncyclopediaCard href={`/grahas/${g.slug}`} title={g.name} category={`${g.english} · ${g.dashaYears} Year Dasha`} description={g.shortDescription} symbol={g.symbol} color={g.color} />
              </RevealSection>
            ))}
          </div>
          <RevealSection>
            <div style={{textAlign:"center",marginTop:"48px"}}>
              <Link href="/grahas" style={{fontFamily:"'Cinzel',serif",fontSize:".62rem",letterSpacing:".22em",color:"#6a5820",textDecoration:"none",borderBottom:"1px solid #6a5820",paddingBottom:"4px"}}>
                EXPLORE ALL NINE GRAHAS →
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <GoldDivider />

      {/* LOKAS VERTICAL */}
      <section style={{background:"linear-gradient(to bottom,#050d1a,#091628)",padding:"120px 0"}}>
        <div style={{maxWidth:"1000px",margin:"0 auto",padding:"0 48px"}}>
          <RevealSection>
            <span className="eyebrow">II — THE VERTICAL COSMOS</span>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:600,color:"#c8a84c",marginBottom:"16px"}}>The Architecture of Existence</h2>
            <p style={{fontSize:"1.1rem",fontStyle:"italic",color:"rgba(232,240,248,.65)",lineHeight:1.95,maxWidth:"680px",marginBottom:"60px"}}>
              Reality is not flat. The Vedic cosmos is a vertical structure of nested planes — each operating at a distinct frequency of consciousness. The birth chart is a cross-section through all of them simultaneously.
            </p>
          </RevealSection>
          <div style={{display:"flex",flexDirection:"column",gap:"0",position:"relative"}}>
            <div style={{position:"absolute",left:"50%",top:0,bottom:0,width:"1px",background:"linear-gradient(to bottom,transparent,#6a5820 8%,#6a5820 92%,transparent)",transform:"translateX(-50%)"}}/>
            {lokas.map((loka,i)=>(
              <RevealSection key={loka.name} delay={i*80}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 80px 1fr",alignItems:"center",minHeight:"160px",padding:"16px 0"}}>
                  <div style={{textAlign:"right",paddingRight:"32px"}}>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:".85rem",letterSpacing:".15em",color:"#c8a84c",marginBottom:"4px"}}>{loka.name}</div>
                    <div style={{fontSize:".78rem",fontStyle:"italic",color:"rgba(232,240,248,.3)",marginBottom:"8px"}}>{loka.sanskrit}</div>
                    <div style={{fontSize:".92rem",lineHeight:1.7,color:"rgba(232,240,248,.58)"}}>{loka.description.slice(0,120)}…</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"center",zIndex:2}}>
                    <div style={{width:"56px",height:"56px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",border:`1px solid ${loka.color}`,background:`radial-gradient(circle at 35% 35%,rgba(200,168,76,.1),rgba(1,2,8,.95))`,boxShadow:`0 0 20px rgba(200,168,76,.12)`}}>
                      {loka.symbol}
                    </div>
                  </div>
                  <div style={{paddingLeft:"32px",fontSize:".9rem",fontStyle:"italic",color:"rgba(232,240,248,.4)",lineHeight:1.65}}>
                    {loka.jyotishConnection}
                  </div>
                </div>
                <div style={{width:"100%",height:"1px",background:"rgba(255,255,255,.03)"}}/>
              </RevealSection>
            ))}
          </div>
          <RevealSection>
            <div style={{textAlign:"center",marginTop:"48px"}}>
              <Link href="/lokas" style={{fontFamily:"'Cinzel',serif",fontSize:".62rem",letterSpacing:".22em",color:"#6a5820",textDecoration:"none",borderBottom:"1px solid #6a5820",paddingBottom:"4px"}}>
                EXPLORE THE FULL COSMOLOGY →
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <GoldDivider />

      {/* DASHAS PREVIEW */}
      <section style={{background:"linear-gradient(to bottom,#091628,#050d1a)",padding:"120px 0"}}>
        <div style={{maxWidth:"1000px",margin:"0 auto",padding:"0 48px"}}>
          <RevealSection>
            <span className="eyebrow">III — THE RIVER OF TIME</span>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:600,color:"#c8a84c",marginBottom:"16px"}}>Vimshottari Dasha</h2>
            <p style={{fontSize:"1.1rem",fontStyle:"italic",color:"rgba(232,240,248,.65)",lineHeight:1.95,maxWidth:"700px",marginBottom:"60px"}}>
              A 120-year cycle of planetary rulership determined by the Moon's nakshatra at birth. Time is not uniform — it has a texture, a ruler, a quality. The same external event experienced in different dashas produces completely different inner and outer results.
            </p>
          </RevealSection>
          <div style={{display:"flex",flexDirection:"column",gap:"0",position:"relative",paddingLeft:"40px"}}>
            <div style={{position:"absolute",left:"0",top:0,bottom:0,width:"1px",background:"linear-gradient(to bottom,transparent,#6a5820 8%,#6a5820 92%,transparent)"}}/>
            {dashas.map((d,i)=>(
              <RevealSection key={d.planet} delay={i*50}>
                <div style={{position:"relative",display:"grid",gridTemplateColumns:"160px 1fr",gap:"40px",padding:"36px 0",borderBottom:"1px solid rgba(255,255,255,.03)"}}>
                  <div style={{position:"absolute",left:"-45px",top:"44px",width:"10px",height:"10px",borderRadius:"50%",background:"#010208",border:"1px solid #6a5820"}}/>
                  <div>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:".62rem",letterSpacing:".2em",color:"#6a5820",marginBottom:"6px"}}>{d.planet} MAHADASHA</div>
                    <div style={{fontSize:"2.4rem",color:d.color,lineHeight:1,marginBottom:"4px"}}>{d.years}</div>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:".58rem",letterSpacing:".1em",color:"rgba(232,240,248,.3)"}}>YEARS</div>
                  </div>
                  <div>
                    <div style={{fontFamily:"'Cinzel',serif",fontSize:"1rem",color:"rgba(232,240,248,.85)",marginBottom:"10px"}}>{d.essence}</div>
                    <div style={{fontSize:".95rem",lineHeight:1.8,color:"rgba(232,240,248,.58)"}}>{d.description}</div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
          <RevealSection>
            <div style={{textAlign:"center",marginTop:"48px"}}>
              <Link href="/dashas" style={{fontFamily:"'Cinzel',serif",fontSize:".62rem",letterSpacing:".22em",color:"#6a5820",textDecoration:"none",borderBottom:"1px solid #6a5820",paddingBottom:"4px"}}>
                EXPLORE THE DASHA SYSTEM →
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <GoldDivider />

      {/* YOGAS PREVIEW */}
      <section style={{background:"linear-gradient(to bottom,#050d1a,#030810)",padding:"120px 0"}}>
        <div style={{maxWidth:"1160px",margin:"0 auto",padding:"0 48px"}}>
          <RevealSection>
            <span className="eyebrow">IV — HIDDEN COMBINATIONS</span>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.8rem,4vw,3rem)",fontWeight:600,color:"#c8a84c",marginBottom:"16px"}}>The Yogas</h2>
            <p style={{fontSize:"1.1rem",fontStyle:"italic",color:"rgba(232,240,248,.65)",lineHeight:1.95,maxWidth:"700px",marginBottom:"60px"}}>
              A yoga is a planetary combination producing results beyond the sum of its parts. Most charts contain yogas the native never discovers. This is the secret knowledge of Jyotish — not what planets mean individually, but what they produce when they conspire.
            </p>
          </RevealSection>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1px"}}>
            {yogas.map((y,i)=>(
              <RevealSection key={y.slug} delay={i*80}>
                <EncyclopediaCard href={`/yogas/${y.slug}`} title={y.name} category={y.category} description={y.shortDesc} />
              </RevealSection>
            ))}
          </div>
          <RevealSection>
            <div style={{textAlign:"center",marginTop:"48px"}}>
              <Link href="/yogas" style={{fontFamily:"'Cinzel',serif",fontSize:".62rem",letterSpacing:".22em",color:"#6a5820",textDecoration:"none",borderBottom:"1px solid #6a5820",paddingBottom:"4px"}}>
                EXPLORE ALL YOGAS →
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <GoldDivider />

      {/* ENCYCLOPEDIA CTA */}
      <RevealSection>
        <section style={{background:"linear-gradient(to bottom,#030810,#010208)",padding:"140px 24px",textAlign:"center"}}>
          <div style={{maxWidth:"720px",margin:"0 auto"}}>
            <span className="eyebrow">THE COMPLETE KNOWLEDGE</span>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:600,color:"#c8a84c",marginBottom:"24px"}}>The Encyclopedia</h2>
            <p style={{fontSize:"1.1rem",fontStyle:"italic",color:"rgba(232,240,248,.65)",lineHeight:1.95,marginBottom:"48px"}}>
              Ashtakavarga. Divisional Charts. Muhurta. Brihat Parashara deep dives. Remedial measures. The 12 Bhavas at their metaphysical depth. Purusha and Prakriti. The nature of consciousness itself. Knowledge that has never been assembled in one place on the internet.
            </p>
            <Link href="/encyclopedia" style={{fontFamily:"'Cinzel',serif",fontSize:".7rem",letterSpacing:".25em",padding:"18px 48px",border:"1px solid #6a5820",color:"#c8a84c",textDecoration:"none",display:"inline-block",transition:"all .3s"}}
              onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#c8a84c";(e.currentTarget as HTMLAnchorElement).style.color="#010208";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background="transparent";(e.currentTarget as HTMLAnchorElement).style.color="#c8a84c";}}>
              ENTER THE ENCYCLOPEDIA
            </Link>
          </div>
        </section>
      </RevealSection>

      <GoldDivider />

      {/* CONSULT CTA */}
      <RevealSection>
        <section style={{background:"#010208",padding:"140px 24px",textAlign:"center"}}>
          <div style={{maxWidth:"640px",margin:"0 auto"}}>
            <span className="eyebrow">PERSONAL READINGS</span>
            <h2 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:600,color:"#c8a84c",marginBottom:"24px"}}>Book a Consultation</h2>
            <p style={{fontSize:"1.1rem",fontStyle:"italic",color:"rgba(232,240,248,.65)",lineHeight:1.95,marginBottom:"16px"}}>
              A complete chart reading that goes beyond prediction — into the metaphysical architecture of your specific karma, the timing of your current dasha, the yogas that are active or approaching, and the cosmic context of your present moment.
            </p>
            <p style={{fontSize:".95rem",fontStyle:"italic",color:"rgba(232,240,248,.4)",lineHeight:1.9,marginBottom:"48px"}}>
              The chart tells you what is happening. The reading tells you what it means in the context of your entire cosmic trajectory.
            </p>
            <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
              <Link href="/consult" style={{fontFamily:"'Cinzel',serif",fontSize:".65rem",letterSpacing:".22em",padding:"16px 36px",border:"1px solid #6a5820",color:"#c8a84c",textDecoration:"none",display:"inline-block",transition:"all .3s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#c8a84c";(e.currentTarget as HTMLAnchorElement).style.color="#010208";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background="transparent";(e.currentTarget as HTMLAnchorElement).style.color="#c8a84c";}}>
                BOOK A READING
              </Link>
              <Link href="/newsletter" style={{fontFamily:"'Cinzel',serif",fontSize:".65rem",letterSpacing:".22em",padding:"16px 36px",border:"1px solid rgba(255,255,255,.06)",color:"rgba(232,240,248,.45)",textDecoration:"none",display:"inline-block",transition:"all .3s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.borderColor="rgba(255,255,255,.15)";(e.currentTarget as HTMLAnchorElement).style.color="rgba(232,240,248,.75)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.borderColor="rgba(255,255,255,.06)";(e.currentTarget as HTMLAnchorElement).style.color="rgba(232,240,248,.45)";}}>
                JOIN THE NEWSLETTER
              </Link>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CLOSING */}
      <section style={{background:"#010208",padding:"100px 24px",textAlign:"center",borderTop:"1px solid rgba(200,168,76,.06)"}}>
        <div style={{maxWidth:"600px",margin:"0 auto"}}>
          <div style={{fontSize:"clamp(1.8rem,5vw,3.5rem)",color:"rgba(200,168,76,.1)",lineHeight:1.4,marginBottom:"32px",fontWeight:300}}>
            ज्योतिषां ज्योतिः<br/>तमसः परम्
          </div>
          <p style={{fontSize:"1.1rem",fontStyle:"italic",lineHeight:2,color:"rgba(232,240,248,.45)"}}>
            "The light of all lights —<br/>
            <em style={{color:"#c8a84c",fontStyle:"normal"}}>that which lies beyond all darkness.</em>"
          </p>
          <div style={{marginTop:"20px",fontFamily:"'Cinzel',serif",fontSize:".58rem",letterSpacing:".25em",color:"#6a5820"}}>
            BHAGAVAD GITA · 13.17
          </div>
        </div>
      </section>

      <footer style={{background:"#010208",textAlign:"center",padding:"48px 24px",borderTop:"1px solid rgba(200,168,76,.04)"}}>
        <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:"1rem",color:"#6a5820",marginBottom:"10px",letterSpacing:".15em"}}>KALA DARSHAN</div>
        <div style={{fontSize:".85rem",fontStyle:"italic",color:"rgba(232,240,248,.25)"}}>काल दर्शन · Jyotish · Vedic Cosmology · The Living Cosmos</div>
        <div style={{display:"flex",justifyContent:"center",gap:"28px",marginTop:"20px",flexWrap:"wrap"}}>
          {["/grahas","/nakshatras","/yogas","/dashas","/lokas","/encyclopedia","/consult","/newsletter"].map(href=>(
            <a key={href} href={href} style={{fontFamily:"'Cinzel',serif",fontSize:".52rem",letterSpacing:".18em",color:"rgba(232,240,248,.25)",textDecoration:"none"}}>
              {href.slice(1).toUpperCase()}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
