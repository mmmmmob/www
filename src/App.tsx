import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NowPlaying } from "./components/NowPlaying";
import { Blogs } from "./pages/Blogs";
import { Home } from "./pages/Home";

function App() {
  const location = useLocation();
  const pathName = location.pathname;
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
        <main className="flex flex-1 flex-col items-center justify-center">
          <div className="my-6 flex w-full flex-col items-center justify-center sm:max-w-5xl">
            {pathName === "/blogs" ? <Blogs /> : <Home />}
          </div>
        </main>
        <footer className="sticky bottom-0 w-full">
          <NowPlaying />
          <Footer />
        </footer>
      </div>
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
