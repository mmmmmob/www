import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

enum Mode {
  Light = "light",
  Dark = "dark",
}

function ModeToggle(): Element {
  const [theme, setTheme] = useState((): Mode => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return Mode.Dark;
    } else {
      return Mode.Light;
    }
  });

  const changeTheme = () => {
    const newTheme = theme === Mode.Light ? Mode.Dark : Mode.Light;
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === Mode.Dark) {
      document.documentElement.classList.add(Mode.Dark);
    } else {
      document.documentElement.classList.remove(Mode.Dark);
    }
  }, [theme]);

  return (
    <button
      onClick={changeTheme}
      className="ml-1 rounded-sm p-1 align-bottom text-base ring-1 ring-slate-700/50 ring-offset-1 hover:ring-slate-700 dark:ring-slate-400 hover:dark:ring-slate-400/50"
    >
      {theme === Mode.Dark ? <IoSunny /> : <IoMoon />}
    </button>
  );
}

export default ModeToggle;
