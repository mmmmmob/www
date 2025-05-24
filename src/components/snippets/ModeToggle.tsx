"use client";

import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

enum Mode {
  Light = "light",
  Dark = "dark",
}

function ModeToggle() {
  const [theme, setTheme] = useState<Mode | null>(null);

  const changeTheme = () => {
    const newTheme = theme === Mode.Light ? Mode.Dark : Mode.Light;
    setTheme(newTheme);
  };

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(prefersDark ? Mode.Dark : Mode.Light);
  }, []);

  useEffect(() => {
    if (!theme) return;
    const chooseDark = theme === Mode.Dark;
    document.documentElement.classList.toggle(
      "dark",
      chooseDark ? true : false,
    );
  }, [theme]);
  if (!theme) return null;

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
