import { notFound } from "next/navigation";
import { grahas } from "@/lib/data";
import GrahaClient from "./GrahaClient";

export async function generateStaticParams() {
  return grahas.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = grahas.find(g => g.slug === slug);
  return { title: `${g?.name} — ${g?.english} | Kala Darshan by TAI Analytics` };
}

export default async function GrahaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = grahas.find(g => g.slug === slug);
  if (!g) return notFound();
  const idx = grahas.indexOf(g);
  return <GrahaClient graha={g} prev={grahas[idx-1] ?? null} next={grahas[idx+1] ?? null} />;
}
