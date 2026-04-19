"use client";
import { useEffect, useRef } from "react";

export default function CosmosCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext("2d")!;
    let W = 0, H = 0, t = 0, raf = 0;
    interface Star { x:number;y:number;r:number;a:number;da:number;dx:number;dy:number; }
    interface Nebula { x:number;y:number;rx:number;ry:number;hue:number;alpha:number; }
    interface Orb { angle:number;radius:number;speed:number;col:string; }
    let stars:Star[]=[], nebulae:Nebula[]=[], orbs:Orb[]=[];
    const resize=()=>{ W=cv.width=window.innerWidth; H=cv.height=window.innerHeight; };
    const init=()=>{
      stars=Array.from({length:300},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.3,a:Math.random(),da:(Math.random()-.5)*.005,dx:(Math.random()-.5)*.03,dy:(Math.random()-.5)*.012}));
      nebulae=Array.from({length:6},(_,i)=>({x:Math.random()*W,y:Math.random()*H,rx:140+Math.random()*260,ry:90+Math.random()*180,hue:[220,195,260,200,240,210][i],alpha:.018+Math.random()*.022}));
      const cols=["#f0c040","#c8e0f8","#c84830","#60c880","#e8c060","#e0a868","#6880a8","#9060b0","#b06840"];
      orbs=Array.from({length:9},(_,i)=>({angle:(i/9)*Math.PI*2,radius:70+i*26,speed:.00018+i*.000025,col:cols[i]}));
    };
    resize(); init();
    window.addEventListener("resize",()=>{ resize(); init(); });
    const draw=()=>{
      ctx.clearRect(0,0,W,H); t+=.003;
      nebulae.forEach(n=>{ const g=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.rx); g.addColorStop(0,`hsla(${n.hue},35%,14%,${n.alpha})`); g.addColorStop(1,"transparent"); ctx.save(); ctx.scale(1,n.ry/n.rx); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(n.x,n.y*(n.rx/n.ry),n.rx,0,Math.PI*2); ctx.fill(); ctx.restore(); n.x+=Math.sin(t*.18+n.hue)*.06; n.y+=Math.cos(t*.12+n.hue)*.04; });
      stars.forEach(s=>{ s.a+=s.da; if(s.a>1||s.a<0)s.da*=-1; s.x+=s.dx; s.y+=s.dy; if(s.x<0)s.x=W; if(s.x>W)s.x=0; if(s.y<0)s.y=H; if(s.y>H)s.y=0; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle=`rgba(220,235,255,${s.a*.8})`; ctx.fill(); });
      const ocx=W/2,ocy=H/2;
      orbs.forEach(o=>{ o.angle+=o.speed; const x=ocx+Math.cos(o.angle)*o.radius,y=ocy+Math.sin(o.angle)*o.radius*.32; ctx.beginPath(); ctx.arc(x,y,2,0,Math.PI*2); ctx.fillStyle=o.col; ctx.shadowColor=o.col; ctx.shadowBlur=8; ctx.fill(); ctx.shadowBlur=0; });
      const pulse=.5+Math.sin(t*.65)*.18; const cg=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,320); cg.addColorStop(0,`rgba(200,168,76,${.022*pulse})`); cg.addColorStop(.5,`rgba(70,90,150,${.013*pulse})`); cg.addColorStop(1,"transparent"); ctx.fillStyle=cg; ctx.beginPath(); ctx.arc(W/2,H/2,320,0,Math.PI*2); ctx.fill();
      raf=requestAnimationFrame(draw);
    };
    draw();
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener("resize",()=>{}); };
  },[]);
  return <canvas ref={canvasRef} style={{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",background:"transparent"}} />;
}
