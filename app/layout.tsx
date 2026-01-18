import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarju-portfolio.vercel.app"),
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.tagline,
  keywords: [
    "Sarju Dharsandiya",
    "Software Development Engineer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Rajkot",
    "Gujarat",
    "India"
  ],
  authors: [{ name: personalInfo.name, url: "https://sarju-portfolio.vercel.app" }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarju-portfolio.vercel.app",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.bio.replace(/\n/g, " ").slice(0, 200) + "...",
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "j0RzvZJV8zHtaTGTG7_QTEAZqCg_auXpPvRFCFfPsTk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "url": "https://sarju-portfolio.vercel.app",
    "image": "https://sarju-portfolio.vercel.app/profile.jpg",
    "sameAs": [
      personalInfo.github,
      personalInfo.linkedin,
      "https://twitter.com/sarju90" // Assumed or placeholder
    ],
    "jobTitle": personalInfo.title,
    "worksFor": {
      "@type": "Organization",
      "name": "Zignuts Technolab"
    },
    "description": personalInfo.bio,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    },
    "email": personalInfo.email,
    "telephone": personalInfo.phone
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
