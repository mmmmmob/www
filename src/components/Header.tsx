import CurrentTime from "./snippets/CurrentTime.tsx";
import ModeToggle from "./snippets/ModeToggle.tsx";

const Header = () => {
  return (
    <div className="relative flex h-12 w-screen items-center bg-white/20 shadow backdrop-blur-lg md:h-14 dark:bg-gray-700/50">
      <div className="flex w-full justify-between px-5">
        <div className="flex-none self-center font-fkDisplay text-sm font-bold">
          <a href="/blogs">Blogs</a>
        </div>
        <div className="flex flex-none self-center">
          <div className="self-center max-md:hidden">
            <CurrentTime />
          </div>
          <div className="ml-2 self-center">
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <a href="/" className="block size-10 -translate-y-1 rounded-md p-1">
          <img src="/logo.png" alt="avatar" />
        </a>
      </div>
    </div>
  );
};

export default Header;
