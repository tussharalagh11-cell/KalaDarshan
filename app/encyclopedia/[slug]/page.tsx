import { notFound } from "next/navigation";
import { encyclopediaTopics } from "@/lib/data";
import EncyclopediaClient from "./EncyclopediaClient";

export async function generateStaticParams() {
  return encyclopediaTopics.map(t => ({ slug: t.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = encyclopediaTopics.find(t => t.slug === slug);
  return { title: `${t?.title} | Kala Darshan Encyclopedia` };
}
export default async function EncyclopediaTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = encyclopediaTopics.find(t => t.slug === slug);
  if (!topic) return notFound();
  const idx = encyclopediaTopics.indexOf(topic);
  return <EncyclopediaClient topic={topic} prev={encyclopediaTopics[idx-1] ?? null} next={encyclopediaTopics[idx+1] ?? null} slug={slug} />;
}
