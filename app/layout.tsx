import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "Dream Home Office Generator";
let description = "Generate your dream home office in seconds.";
let ogimage = "https://aihomeoffices.com/og-image.png";
let sitename = "aihomeoffices.com";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://aihomeoffices.com",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#17181C] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
