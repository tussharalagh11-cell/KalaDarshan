import Link from "next/link";
export default function NotFound() {
  return (
    <section style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"120px 24px",background:"#010208"}}>
      <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:"clamp(4rem,12vw,8rem)",color:"rgba(200,168,76,.08)",lineHeight:1,marginBottom:"32px"}}>404</div>
      <div style={{fontFamily:"'Cinzel',serif",fontSize:".6rem",letterSpacing:".4em",color:"#6a5820",marginBottom:"16px"}}>PAGE NOT FOUND</div>
      <h1 style={{fontFamily:"'Cinzel',serif",fontSize:"clamp(1.5rem,4vw,2.5rem)",color:"#c8a84c",marginBottom:"24px"}}>This page does not exist</h1>
      <p style={{fontSize:"1.05rem",fontStyle:"italic",color:"rgba(232,240,248,.5)",lineHeight:1.85,maxWidth:"440px",marginBottom:"48px"}}>Like uncrystallized karma — this path has not yet taken form. Return to what exists.</p>
      <Link href="/" style={{fontFamily:"'Cinzel',serif",fontSize:".65rem",letterSpacing:".22em",padding:"14px 32px",border:"1px solid #6a5820",color:"#c8a84c",textDecoration:"none"}}>
        RETURN TO THE COSMOS
      </Link>
    </section>
  );
}
