import { Metadata } from 'next';
import { siteConfig } from "@/constants";

export const metadata: Metadata = {
  title: "Blog & Artikel",
  description: "Dapatkan insight, tips, dan tren terbaru seputar branding, desain, dan digital marketing dari Crewtiv.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${siteConfig.url}/articles`,
    title: "Blog & Artikel | Crewtiv",
    description: "Dapatkan insight, tips, dan tren terbaru seputar branding, desain, dan digital marketing dari Crewtiv.",
    siteName: siteConfig.title,
    images: [{ url: siteConfig.image, width: 1200, height: 630, alt: "Blog & Artikel | Crewtiv" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Artikel | Crewtiv",
    description: "Dapatkan insight, tips, dan tren terbaru seputar branding, desain, dan digital marketing dari Crewtiv.",
    images: [siteConfig.image],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
