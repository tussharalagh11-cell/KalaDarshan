"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/grahas", label: "GRAHAS" },
  { href: "/nakshatras", label: "NAKSHATRAS" },
  { href: "/yogas", label: "YOGAS" },
  { href: "/dashas", label: "DASHAS" },
  { href: "/lokas", label: "LOKAS" },
  { href: "/encyclopedia", label: "ENCYCLOPEDIA" },
  { href: "/consult", label: "CONSULT" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 48px",background:"linear-gradient(to bottom,rgba(1,2,8,.96),transparent)",backdropFilter:"blur(6px)"}}>
      <Link href="/" style={{fontFamily:"'Cinzel Decorative',serif",fontSize:"1rem",color:"#c8a84c",letterSpacing:".18em",textDecoration:"none",textShadow:"0 0 24px rgba(200,168,76,.35)"}}>
        KALA DARSHAN
      </Link>
      {/* Desktop */}
      <ul style={{display:"flex",gap:"24px",listStyle:"none",margin:0,padding:0}} className="hidden-mobile">
        {links.map(l=>(
          <li key={l.href}>
            <Link href={l.href} style={{fontFamily:"'Cinzel',serif",fontSize:".58rem",letterSpacing:".22em",color:"rgba(232,240,248,.45)",textDecoration:"none",transition:"color .3s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#c8a84c")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(232,240,248,.45)")}
            >{l.label}</Link>
          </li>
        ))}
      </ul>
      {/* Mobile burger */}
      <button onClick={()=>setOpen(!open)} style={{display:"none",background:"none",border:"none",color:"#c8a84c",fontSize:"1.4rem",cursor:"pointer"}} className="show-mobile">☰</button>
      {open && (
        <div style={{position:"fixed",inset:0,background:"rgba(1,2,8,.97)",zIndex:300,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"32px"}}>
          <button onClick={()=>setOpen(false)} style={{position:"absolute",top:"24px",right:"24px",background:"none",border:"none",color:"#c8a84c",fontSize:"1.6rem",cursor:"pointer"}}>✕</button>
          {links.map(l=>(
            <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{fontFamily:"'Cinzel',serif",fontSize:"1.1rem",letterSpacing:".25em",color:"rgba(232,240,248,.7)",textDecoration:"none"}}>{l.label}</Link>
          ))}
        </div>
      )}
      <style>{`.hidden-mobile{display:flex}@media(max-width:768px){.hidden-mobile{display:none!important}.show-mobile{display:block!important}}`}</style>
    </nav>
  );
}
