import { Metadata } from "next";
import { siteConfig } from "@/constants";

export const metadata: Metadata = {
  title: "Social Media Management",
  description:
    "Layanan pengelolaan media sosial profesional untuk meningkatkan engagement dan brand awareness Anda.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${siteConfig.url}/social-media`,
    title: "Social Media Management",
    description:
      "Layanan pengelolaan media sosial profesional untuk meningkatkan engagement dan brand awareness Anda.",
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Social Media Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management",
    description:
      "Layanan pengelolaan media sosial profesional untuk meningkatkan engagement dan brand awareness Anda.",
    images: [siteConfig.image],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
