import { notFound } from "next/navigation";
import { nakshatras } from "@/lib/data";
import NakshatraClient from "./NakshatraClient";

export async function generateStaticParams() {
  return nakshatras.map(n => ({ num: String(n.num) }));
}
export async function generateMetadata({ params }: { params: { num: string } }) {
  const n = nakshatras.find(n => n.num === parseInt(params.num));
  return { title: `${n?.name} Nakshatra | Kala Darshan by TAI Analytics` };
}
export default function NakshatraPage({ params }: { params: { num: string } }) {
  const n = nakshatras.find(n => n.num === parseInt(params.num));
  if (!n) return notFound();
  const prev = nakshatras[n.num - 2];
  const next = nakshatras[n.num];
  return <NakshatraClient nakshatra={n} prev={prev} next={next} />;
}
