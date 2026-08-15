import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";

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
  description: "Tasuta ettevalmistus ja testid Eesti jalgratturi teooriaeksamiks. 15 küsimust, 15 teemat, mängud, liiklusmärgid ja selgitused.",
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
          <Navbar />
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
            {children}
          </main>
          <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
            <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p>© 2026 JalgrattaEksam.ee – Eesti jalgratturi juhiloa ettevalmistuskeskkond</p>
              <p>Põhineb Transpordiameti ja Liiklusseaduse nõuetel</p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
