"use client";

import Image from "next/image";
import Link from "next/link";
import CurrentTime from "./snippets/CurrentTime";
import ModeToggle from "./snippets/ModeToggle";

const Header = () => {
  console.log("Hello, World! 👾");
  return (
    <div className="relative flex h-12 w-screen items-center bg-white/20 shadow backdrop-blur-lg md:h-14 dark:bg-gray-700/50">
      <div className="flex w-full justify-between px-5">
        <div className="font-fkDisplay flex-none self-center text-sm font-bold">
          <Link href="/blogs">Blogs</Link>
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
        <Link href="/" className="block size-10 -translate-y-1 rounded-md p-1">
          <Image src="/logo.png" width={150} height={150} alt="avatar" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
