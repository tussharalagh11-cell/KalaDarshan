import { notFound } from "next/navigation";
import { yogas } from "@/lib/data";
import YogaClient from "./YogaClient";

export async function generateStaticParams() { return yogas.map(y => ({ slug: y.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const y = yogas.find(y => y.slug === slug);
  return { title: `${y?.name} | Kala Darshan by TAI Analytics` };
}
export default async function YogaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const y = yogas.find(y => y.slug === slug);
  if (!y) return notFound();
  const idx = yogas.indexOf(y);
  return <YogaClient yoga={y} prev={yogas[idx-1] ?? null} next={yogas[idx+1] ?? null} />;
}
