import CurrentTime from "./snippets/CurrentTime.tsx";
import ModeToggle from "./snippets/ModeToggle.tsx";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200 font-fkDisplay text-slate-800 dark:bg-slate-900 dark:text-slate-300">
      <h1>hello world</h1>
      <CurrentTime />
      <ModeToggle />
    </div>
  );
};

export default App;
