import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { VisitorBoot } from "@/components/VisitorBoot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jalgratturi Teooriaeksam (Eesti) | Jalgrattaload Liiklustestid",
  description: "Tasuta ettevalmistus Eesti jalgratturi teooriaeksamiks. Sada+ unikaalset küsimust, juhuslikud testid küpsise järgi, 15 teemat ja selgitused.",
  keywords: ["jalgratturi eksam", "liiklustestid", "jalgrattaluba", "transpordiamet", "велосипедные права эстония", "bicycle exam estonia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-sky-500 selection:text-white">
        <LanguageProvider>
          <VisitorBoot />
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
            {children}
          </main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
