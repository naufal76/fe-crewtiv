import { Metadata } from "next";
import { siteConfig } from "@/constants";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website",
  description:
    "Layanan jasa pembuatan website responsif, cepat, dan SEO friendly untuk bisnis dan UMKM oleh Crewtiv.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${siteConfig.url}/website-development`,
    title: "Jasa Pembuatan Website",
    description:
      "Layanan jasa pembuatan website responsif, cepat, dan SEO friendly untuk bisnis dan UMKM oleh Crewtiv.",
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Jasa Pembuatan Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website",
    description:
      "Layanan jasa pembuatan website responsif, cepat, dan SEO friendly untuk bisnis dan UMKM oleh Crewtiv.",
    images: [siteConfig.image],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
