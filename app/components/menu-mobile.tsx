"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";

const MenuMobile = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <Button
        className="bg-transparent hover:bg-red-50 active:bg-red-50 md:hidden"
        title="btn"
        onClick={handleMenu}
      >
        {!menu ? (
          <Bars4Icon className="text-primary h-6 w-6 border-red-300 " />
        ) : (
          <XMarkIcon className="text-primary h-6 w-6 border-red-300 " />
        )}
      </Button>
      {menu && (
        <div className="absolute right-0 top-20 flex w-full flex-col bg-white">
          <div className="flex-direction-inherit border bg-[#f5f7f9] ">
            {children}
          </div>

          <div className="flex h-20 items-center justify-center">
            <Link
              href={"/login"}
              className="text-base leading-4 text-black md:text-xl"
            >
              Login
            </Link>
            <div className="px-2">|</div>
            <Link
              href={"/register"}
              className="text-base leading-4 text-black md:text-xl"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuMobile;
