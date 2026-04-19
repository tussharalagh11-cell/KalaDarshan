import { notFound } from "next/navigation";
import { nakshatras } from "@/lib/data";
import NakshatraClient from "./NakshatraClient";

export async function generateStaticParams() {
  return nakshatras.map(n => ({ num: String(n.num) }));
}
export async function generateMetadata({ params }: { params: Promise<{ num: string }> }) {
  const { num } = await params;
  const n = nakshatras.find(n => n.num === parseInt(num));
  return { title: `${n?.name} Nakshatra | Kala Darshan by TAI Analytics` };
}
export default async function NakshatraPage({ params }: { params: Promise<{ num: string }> }) {
  const { num } = await params;
  const n = nakshatras.find(n => n.num === parseInt(num));
  if (!n) return notFound();
  return <NakshatraClient nakshatra={n} prev={nakshatras[n.num-2] ?? null} next={nakshatras[n.num] ?? null} />;
}
