import React from "react";
import Navbar from "@/app/components/navbar";
import MenuMobile from "@/app/components/menu-mobile";
import Logo from "@/app/components/logo";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative z-50 flex h-20 min-w-full items-center justify-between bg-white px-4 py-2">
      <Logo />
      <div className="relative flex flex-row text-black max-[920px]:hidden">
        <Navbar />
      </div>
      <MenuMobile>
        <Navbar />
      </MenuMobile>
      <div>
        <Button
          className="flex bg-[#d4a6b6] hover:animate-bounce h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          type="button"
        >
          <Link href={"/login"}>Sign In</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
