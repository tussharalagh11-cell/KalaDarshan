"use client";
import { useEffect, useRef, ReactNode } from "react";
import Link from "next/link";

export function RevealSection({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function GoldDivider() {
  return <div className="gold-divider" />;
}

export function SectionHeader({ eyebrow, title, intro, center = false }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: "60px" }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 600, color: "#c8a84c", lineHeight: 1.15, marginBottom: "16px" }}>
        {title}
      </h2>
      {intro && (
        <p style={{ fontSize: "1.1rem", fontStyle: "italic", color: "rgba(232,240,248,.68)", lineHeight: 1.95, maxWidth: center ? "660px" : "720px", margin: center ? "0 auto" : undefined }}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function EncyclopediaCard({ href, title, category, description, symbol, color = "#c8a84c" }: { href: string; title: string; category: string; description: string; symbol?: string; color?: string }) {
  return (
    <Link href={href} style={{ display: "block", textDecoration: "none" }}>
      <div style={{ padding: "32px 28px", background: "rgba(255,255,255,.015)", border: "1px solid rgba(255,255,255,.04)", transition: "all .4s", cursor: "none", position: "relative", overflow: "hidden", height: "100%" }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = color; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,.025)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,.04)"; (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,.015)"; }}
      >
        {symbol && <div style={{ fontSize: "2.2rem", marginBottom: "14px", filter: `drop-shadow(0 0 10px ${color})` }}>{symbol}</div>}
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: ".56rem", letterSpacing: ".3em", color: "#6a5820", marginBottom: "8px" }}>{category}</div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: "1rem", letterSpacing: ".1em", color, marginBottom: "12px" }}>{title}</div>
        <div style={{ fontSize: ".94rem", lineHeight: 1.72, color: "rgba(232,240,248,.62)" }}>{description}</div>
        <div style={{ marginTop: "20px", fontFamily: "'Cinzel',serif", fontSize: ".56rem", letterSpacing: ".2em", color: "#6a5820" }}>READ MORE →</div>
      </div>
    </Link>
  );
}

export function ProseKala({ children }: { children: ReactNode }) {
  return <div className="prose-kala">{children}</div>;
}

export function PageHero({ eyebrow, title, subtitle, body }: { eyebrow: string; title: string; subtitle?: string; body?: string }) {
  return (
    <section style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "140px 24px 80px" }}>
      <span className="eyebrow">{eyebrow}</span>
      <h1 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(2.5rem,8vw,6rem)", fontWeight: 700, lineHeight: .95, color: "#f0d878", textShadow: "0 0 60px rgba(200,168,76,.25)", letterSpacing: ".04em", marginBottom: "20px" }}>
        {title}
        {subtitle && <span style={{ display: "block", fontFamily: "'Cinzel',serif", fontSize: ".28em", letterSpacing: ".35em", color: "#3a5870", marginTop: "18px", fontWeight: 400, textShadow: "none" }}>{subtitle}</span>}
      </h1>
      {body && <p style={{ maxWidth: "580px", fontSize: "clamp(1.05rem,2vw,1.25rem)", fontStyle: "italic", color: "rgba(232,240,248,.65)", lineHeight: 1.9 }}>{body}</p>}
    </section>
  );
}
