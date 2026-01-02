import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Hamid Raza - Lead Software Engineer",
  description:
    "Lead Software Engineer specializing in scalable architecture, team leadership, and modern web technologies. Proven track record in building enterprise-level applications and leading high-performance engineering teams.",
  keywords: [
    "Lead Software Engineer",
    "Technical Lead",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Cloud Architecture",
    "Team Leadership",
    "Software Architecture",
  ],
  authors: [{ name: "Hamid Raza" }],
  openGraph: {
    title: "Hamid Raza - Lead Software Engineer",
    description:
      "Lead Software Engineer with expertise in scalable architecture and team leadership",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
