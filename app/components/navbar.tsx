import React from "react";
import { fetchCategories } from "@/app/lib/data";
import Link from "next/link";

const Navbar = async () => {
  const categories = await fetchCategories();
  return (
    <>
      <nav className="flex flex-direction-inherit border-inherit text-inherit">
        <ul className="flex-direction-inherit flex border-inherit uppercase">
          {categories.map((category: any) => {
            return (
              <li
                key={category.id}
                className="hover:text-primary block border-inherit px-4 text-sm font-medium leading-[4rem] text-current transition delay-150 ease-in-out"
              >
                <Link href={`/${category.name!.toLocaleLowerCase()}`}>
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex-direction-inherit flex border-inherit uppercase">
          <Link
            href={"/contact"}
            className="hover:text-primary block px-4 text-sm font-medium leading-[4rem] text-current transition delay-150 ease-in-out "
          >
            Contact
          </Link>
          <Link
            href={"/contact"}
            className="hover:text-primary block border-inherit px-4 text-sm font-medium leading-[4rem] text-current transition delay-150 ease-in-out"
          >
            About
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
