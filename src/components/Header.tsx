import CurrentTime from "../snippets/CurrentTime.tsx";
import ModeToggle from "../snippets/ModeToggle.tsx";

const Header = () => {
  return (
    <div className="flex h-12 w-screen justify-between bg-white/20 shadow backdrop-blur-lg md:h-14 dark:bg-gray-700/50">
      <a
        href="#"
        className="ml-1 size-10 -translate-y-1 self-center rounded-md p-1 md:ml-3"
      >
        <img src="/logo.png" alt="avatar" />
      </a>
      <div className="mr-3 flex self-center md:mr-5">
        <div className="self-center">
          <CurrentTime />
        </div>
        <div className="ml-2 self-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
