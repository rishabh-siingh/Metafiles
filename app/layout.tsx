import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Providers } from "@/components/providers";
import { themeInitScript } from "@/lib/theme-context";
import "./globals.css";

const bodyFont = Poppins({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

const displayFont = Poppins({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metafiles.com"),
  title: {
    default: "Metafiles — Digital products from independent creators",
    template: "%s · Metafiles",
  },
  description:
    "A curated marketplace for UI kits, fonts, courses, ebooks, and templates from independent creators. Every listing reviewed before it ships.",
  openGraph: {
    type: "website",
    siteName: "Metafiles",
    title: "Metafiles — Digital products from independent creators",
    description: "UI kits, fonts, courses, ebooks, and templates — reviewed before they ship.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metafiles — Digital products from independent creators",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable} flex min-h-screen flex-col font-body`}>
        <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,hsl(var(--primary)/0.16),transparent)]" />
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
