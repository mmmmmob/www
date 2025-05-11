import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { BlogPost } from "./pages/BlogPost";
import { Blogs } from "./pages/Blogs";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // <Outlet/> will pick up these children for render
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:slug", element: <BlogPost /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
