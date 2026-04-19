"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const ring = document.getElementById("cursor-ring");
    const dot = document.getElementById("cursor-dot");
    if (!ring || !dot) return;
    let cx = 0, cy = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; dot.style.left = tx + "px"; dot.style.top = ty + "px"; };
    document.addEventListener("mousemove", move);
    const anim = () => { cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12; ring.style.left = cx + "px"; ring.style.top = cy + "px"; requestAnimationFrame(anim); };
    requestAnimationFrame(anim);
    return () => document.removeEventListener("mousemove", move);
  }, []);
  return (<><div id="cursor-ring" /><div id="cursor-dot" /></>);
}
