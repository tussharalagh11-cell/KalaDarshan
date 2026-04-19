"use client";
import { useEffect, useRef, ReactNode } from "react";
import Link from "next/link";

export function RevealSection({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.07 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function GoldDivider() {
  return <div className="gold-divider" />;
}

export function SectionHeader({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "56px" }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 style={{
        fontFamily: "'Cinzel',serif",
        fontSize: "clamp(1.9rem,4vw,3rem)",
        fontWeight: 600,
        color: "#c8a84c",
        lineHeight: 1.15,
        marginBottom: "18px",
        letterSpacing: ".04em",
      }}>{title}</h2>
      {intro && <p style={{
        fontSize: "1.12rem",
        fontStyle: "italic",
        color: "rgba(240,244,248,0.9)",
        lineHeight: 1.95,
        maxWidth: center ? "660px" : "720px",
        margin: center ? "0 auto" : undefined,
      }}>{intro}</p>}
    </div>
  );
}

export function EncyclopediaCard({ href, title, category, description, symbol, color = "#c8a84c" }: {
  href: string; title: string; category: string; description: string; symbol?: string; color?: string;
}) {
  return (
    <Link href={href} style={{ display: "block", textDecoration: "none", height: "100%" }}>
      <div className="kd-card" style={{ height: "100%", cursor: "none" }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = color; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
      >
        {symbol && <div style={{ fontSize: "2.4rem", marginBottom: "14px", filter: `drop-shadow(0 0 10px ${color})` }}>{symbol}</div>}
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: "0.58rem", letterSpacing: ".28em", color: "rgba(138,112,48,0.9)", marginBottom: "8px", textTransform: "uppercase" }}>{category}</div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: "1rem", letterSpacing: ".1em", color, marginBottom: "12px" }}>{title}</div>
        <div style={{ fontSize: "0.97rem", lineHeight: 1.75, color: "rgba(240,244,248,0.9)" }}>{description}</div>
        <div style={{ marginTop: "20px", fontFamily: "'Cinzel',serif", fontSize: "0.58rem", letterSpacing: ".2em", color: "rgba(138,112,48,0.8)" }}>READ MORE →</div>
      </div>
    </Link>
  );
}

export function ProseKala({ children }: { children: ReactNode }) {
  return <div className="prose-kala">{children}</div>;
}

export function PageHero({ eyebrow, title, subtitle, body }: { eyebrow: string; title: string; subtitle?: string; body?: string }) {
  return (
    <section className="page-hero">
      <span className="eyebrow">{eyebrow}</span>
      <h1 style={{
        fontFamily: "'Cinzel Decorative',serif",
        fontSize: "clamp(2.5rem,8vw,6rem)",
        fontWeight: 700,
        lineHeight: .95,
        color: "#f0d878",
        textShadow: "0 0 60px rgba(200,168,76,0.25)",
        letterSpacing: ".04em",
        marginBottom: "20px",
        maxWidth: "900px",
        textAlign: "center",
      }}>
        {title}
        {subtitle && (
          <span style={{
            display: "block",
            fontFamily: "'Cinzel',serif",
            fontSize: ".25em",
            letterSpacing: ".38em",
            color: "rgba(138,112,48,0.75)",
            marginTop: "20px",
            fontWeight: 400,
            textShadow: "none",
          }}>{subtitle}</span>
        )}
      </h1>
      {body && <p style={{
        maxWidth: "600px",
        fontSize: "1.15rem",
        fontStyle: "italic",
        color: "rgba(240,244,248,0.9)",
        lineHeight: 1.9,
        textAlign: "center",
      }}>{body}</p>}
    </section>
  );
}
