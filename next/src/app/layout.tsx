import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NowPlaying } from "@/components/NowPlaying";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theppitak M. - React + Typescript Web Developer",
  description:
    "Web developer and Creative copywriter in Bangkok, Thailand. Expertise in React, Typescript, and more. Contact me for web development or copywriting projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col bg-slate-200 text-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <header className="sticky top-0 w-full">
            <Header />
          </header>
          <main className="flex flex-1 flex-col items-center">
            <div className="my-6 flex w-full flex-col items-center sm:max-w-5xl">
              {children}
            </div>
          </main>
          <footer className="sticky bottom-0 w-full">
            <NowPlaying />
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
