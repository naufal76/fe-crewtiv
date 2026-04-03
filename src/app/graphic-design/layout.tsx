import { Metadata } from "next";
import { siteConfig } from "@/constants";

export const metadata: Metadata = {
  title: "Jasa Desain Grafis Profesional",
  description:
    "Crewtiv menyediakan layanan jasa desain grafis profesional untuk UMKM, startup, hingga perusahaan.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${siteConfig.url}/graphic-design`,
    title: "Jasa Desain Grafis Profesional",
    description:
      "Crewtiv menyediakan layanan jasa desain grafis profesional untuk UMKM, startup, hingga perusahaan.",
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Jasa Desain Grafis Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Desain Grafis Profesional",
    description:
      "Crewtiv menyediakan layanan jasa desain grafis profesional untuk UMKM, startup, hingga perusahaan.",
    images: [siteConfig.image],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
