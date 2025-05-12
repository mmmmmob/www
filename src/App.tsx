import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Outlet } from "react-router-dom";
import { Layout } from "./Layout";

function App() {
  console.log("Hello, World! 👾");
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
