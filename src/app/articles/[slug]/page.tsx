import { blogPosts, siteConfig } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const url = `${siteConfig.url}/articles/${post.slug}`;
  const image = post.image || "https://placehold.co/800x600?text=No+Image";

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      url: url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Crewtiv Admin"],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <section className="bg-black text-white min-h-screen px-6 py-20 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/articles"
          className="text-[#f22a98] hover:underline mb-8 inline-block"
        >
          ← Kembali ke Blog
        </Link>
        <p className="text-white/50 mb-4">{post.date}</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#f22a98] mb-8 leading-tight">
          {post.title}
        </h1>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-xl w-full h-[400px] object-cover mb-10"
        />
        <div className="text-lg text-white/80 leading-relaxed space-y-6">
          <p>{post.excerpt}</p>
          <p>
            Konten artikel dapat ditambahkan di sini. Untuk saat ini hanya
            menampilkan excerpt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
