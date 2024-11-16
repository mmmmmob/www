import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Info from "./components/Info.tsx";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200 font-fkDisplay text-slate-800 dark:bg-slate-900 dark:text-slate-300">
      <Header />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
