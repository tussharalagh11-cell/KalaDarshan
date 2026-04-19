import { notFound } from "next/navigation";
import { yogas } from "@/lib/data";
import YogaClient from "./YogaClient";

export async function generateStaticParams() { return yogas.map(y => ({ slug: y.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const y = yogas.find(y => y.slug === params.slug);
  return { title: `${y?.name} | Kala Darshan by TAI Analytics` };
}
export default function YogaPage({ params }: { params: { slug: string } }) {
  const y = yogas.find(y => y.slug === params.slug);
  if (!y) return notFound();
  const idx = yogas.indexOf(y);
  return <YogaClient yoga={y} prev={yogas[idx-1]} next={yogas[idx+1]} />;
}
