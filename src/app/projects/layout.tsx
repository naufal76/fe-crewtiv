import { Metadata } from "next";
import { siteConfig } from "@/constants";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description:
    "Lihat hasil karya dan studi kasus pembuatan website, logo, hingga pengelolaan sosmed dari Crewtiv.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${siteConfig.url}/projects`,
    title: "Projects & Portfolio",
    description:
      "Lihat hasil karya dan studi kasus pembuatan website, logo, hingga pengelolaan sosmed dari Crewtiv.",
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Projects & Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Portfolio",
    description:
      "Lihat hasil karya dan studi kasus pembuatan website, logo, hingga pengelolaan sosmed dari Crewtiv.",
    images: [siteConfig.image],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
