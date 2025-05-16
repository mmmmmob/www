import { Helmet } from "react-helmet-async";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NowPlaying } from "./components/NowPlaying";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Helmet>
        <title>Theppitak M. - React + Typescript Web Developer</title>
        <meta
          name="description"
          content="Web developer and Creative copywriter in Bangkok, Thailand. Expertise in React, Typescript, and more. Contact me for web development or copywriting projects."
        />
      </Helmet>
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
    </>
  );
};
