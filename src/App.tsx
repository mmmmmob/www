import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useLocation, useParams } from "react-router-dom";
import { Layout } from "./Layout";
import { BlogPost } from "./pages/BlogPost";
import { Blogs } from "./pages/Blogs";
import { Home } from "./pages/Home";

function App() {
  const location = useLocation();
  const pathName = location.pathname;
  const { slug } = useParams();

  return (
    <>
      <Layout
        children={pathName === "/" ? <Home /> : slug ? <BlogPost /> : <Blogs />}
      />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
