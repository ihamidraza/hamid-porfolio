import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Hamid Raza | Lead Software Engineer - IoT, Real-Time Systems & AI",
  description:
    "Lead Software Engineer with 10+ years experience building systems that process 1M+ events/hour. Specializing in IoT platforms, real-time analytics, and distributed systems. Expertise in React, Node.js, Kafka, Kubernetes, and AI integration.",
  keywords: [
    "Lead Software Engineer",
    "IoT Platform Architect",
    "Real-Time Systems",
    "Distributed Systems",
    "Technical Lead",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Kafka",
    "Kubernetes",
    "AI Integration",
    "Cloud Architecture",
    "Team Leadership",
    "Software Architecture",
    "MQTT",
    "PostgreSQL",
    "TypeScript",
  ],
  authors: [{ name: "Hamid Raza", url: "https://github.com/ihamidraza" }],
  creator: "Hamid Raza",
  openGraph: {
    title: "Hamid Raza | Lead Software Engineer",
    description:
      "Building systems that process 1M+ events/hour. 10+ years experience in IoT, real-time analytics, and distributed systems.",
    type: "website",
    locale: "en_US",
    siteName: "Hamid Raza Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamid Raza | Lead Software Engineer",
    description:
      "Building systems that process 1M+ events/hour. Specializing in IoT, real-time analytics, and distributed systems.",
    creator: "@ihamidraza",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
