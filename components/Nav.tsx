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
    <>
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:200,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"18px 48px",
        background:"linear-gradient(to bottom,rgba(1,2,8,0.98) 60%,transparent)",
        backdropFilter:"blur(8px)",
      }}>
        {/* Logo */}
        <Link href="/" style={{textDecoration:"none",display:"flex",flexDirection:"column",gap:"3px"}}>
          <span style={{
            fontFamily:"'Cinzel Decorative',serif",
            fontSize:"1.15rem",
            fontWeight:400,
            color:"#c8a84c",
            letterSpacing:".15em",
            textShadow:"0 0 20px rgba(200,168,76,0.3)",
            lineHeight:1,
          }}>KALA DARSHAN</span>
          <span style={{
            fontFamily:"'Cinzel',serif",
            fontSize:"0.52rem",
            letterSpacing:".35em",
            color:"rgba(138,112,48,0.9)",
            lineHeight:1,
          }}>BY TAI ANALYTICS</span>
        </Link>

        {/* Desktop links */}
        <ul style={{display:"flex",gap:"32px",listStyle:"none",margin:0,padding:0}} className="nav-desktop">
          {links.map(l=>(
            <li key={l.href}>
              <Link href={l.href} style={{
                fontFamily:"'Cinzel',serif",
                fontSize:"0.6rem",
                letterSpacing:".22em",
                color:"rgba(240,244,248,0.75)",
                textDecoration:"none",
                transition:"color .3s",
              }}
                onMouseEnter={e=>(e.currentTarget.style.color="#c8a84c")}
                onMouseLeave={e=>(e.currentTarget.style.color="rgba(240,244,248,0.9)")}
              >{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button onClick={()=>setOpen(!open)} className="nav-mobile" style={{
          display:"none",background:"none",border:"none",
          color:"#c8a84c",fontSize:"1.4rem",cursor:"pointer",lineHeight:1,
        }}>☰</button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position:"fixed",inset:0,background:"rgba(1,2,8,0.98)",
          zIndex:300,display:"flex",flexDirection:"column",
          alignItems:"center",justifyContent:"center",gap:"36px",
        }}>
          <button onClick={()=>setOpen(false)} style={{
            position:"absolute",top:"24px",right:"28px",
            background:"none",border:"none",color:"#c8a84c",
            fontSize:"1.8rem",cursor:"pointer",
          }}>✕</button>
          {links.map(l=>(
            <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{
              fontFamily:"'Cinzel',serif",fontSize:"1rem",
              letterSpacing:".3em",color:"rgba(240,244,248,0.9)",textDecoration:"none",
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
