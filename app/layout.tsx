import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AeroShift — Human + AI + Drone Logistics",
  description: "AeroShift is an early-stage human + AI + drone logistics startup concept designed to reduce the physical workload of delivery workers while keeping people at the center of delivery.",
  keywords: ["AeroShift", "drone logistics", "AI logistics", "human drone logistics", "drone delivery", "delivery technology", "logistics automation", "drone operators", "AI fleet management", "India deep tech startup"],
  openGraph: {
    title: "AeroShift — Human + AI + Drone Logistics",
    description: "AI coordinates. Drones transport. People remain in control.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AeroShift — Human + AI + Drone Logistics",
    description: "A human-centered approach to the future of delivery work.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
