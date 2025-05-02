import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monte Holistico - Dosha Questionnaire",
  description: "Take a quick questionnaire to discover your dosha.",
  openGraph: {
    title: "Monte Holistico - Dosha Questionnaire",
    description: "Take a quick questionnaire to discover your dosha.",
    url: "https://mh-dosha-questionnaire.vercel.app/",
    siteName: "Monte Holistico",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monte Holistico - Dosha Questionnaire",
    description: "Take a quick questionnaire to discover your dosha.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#8f4c372b]">{children}</body>
    </html>
  );
}
