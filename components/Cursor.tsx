"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const ring = document.getElementById("cursor-ring");
    const dot = document.getElementById("cursor-dot");
    const trail = document.getElementById("cursor-trail");
    if (!ring || !dot || !trail) return;
    let tx=0,ty=0,rx=0,ry=0,trx=0,tr_y=0;
    const move=(e:MouseEvent)=>{tx=e.clientX;ty=e.clientY;dot.style.left=tx+"px";dot.style.top=ty+"px";};
    document.addEventListener("mousemove",move);
    const anim=()=>{rx+=(tx-rx)*.14;ry+=(ty-ry)*.14;ring.style.left=rx+"px";ring.style.top=ry+"px";trx+=(rx-trx)*.07;tr_y+=(ry-tr_y)*.07;trail.style.left=trx+"px";trail.style.top=tr_y+"px";requestAnimationFrame(anim);};
    requestAnimationFrame(anim);
    const grow=()=>{ring.style.width="52px";ring.style.height="52px";ring.style.borderColor="#f0d878";};
    const shrink=()=>{ring.style.width="28px";ring.style.height="28px";ring.style.borderColor="#c8a84c";};
    document.querySelectorAll("a,button").forEach(el=>{el.addEventListener("mouseenter",grow);el.addEventListener("mouseleave",shrink);});
    return()=>document.removeEventListener("mousemove",move);
  },[]);
  return (<>
    <div id="cursor-trail" style={{position:"fixed",top:0,left:0,width:"64px",height:"64px",borderRadius:"50%",border:"1px solid rgba(200,168,76,0.15)",pointerEvents:"none",zIndex:9997,transform:"translate(-50%,-50%)"}}/>
    <div id="cursor-ring" style={{position:"fixed",top:0,left:0,width:"28px",height:"28px",borderRadius:"50%",border:"1px solid #c8a84c",pointerEvents:"none",zIndex:9998,transform:"translate(-50%,-50%)",transition:"width .25s,height .25s,border-color .25s",mixBlendMode:"screen"}}/>
    <div id="cursor-dot" style={{position:"fixed",top:0,left:0,width:"5px",height:"5px",borderRadius:"50%",background:"#f0d878",pointerEvents:"none",zIndex:9999,transform:"translate(-50%,-50%)",boxShadow:"0 0 8px #f0d878,0 0 20px rgba(240,216,120,0.5)"}}/>
  </>);
}
