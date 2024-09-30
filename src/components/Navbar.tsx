import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface INavItems {
  name: string;
  path: string;
  icon?: ReactNode;
}

const NavItems: INavItems[] = [
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "Series",
    path: "/series",
  },
  {
    name: "People",
    path: "/people",
  },
];

const Navbar = () => {
  return (
    <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-x-1">
          {/* Logo */}
          <Logo />

          {/* Mobile Nav Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" variant="outline" size="icon">
                <MenuIcon className="size-5" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <NavListItems />
            </SheetContent>
          </Sheet>
        </div>

        {/* NavItems */}
        <NavListItems />
      </nav>
    </header>
  );
};

export default Navbar;

export const Logo = () => {
  return (
    <Link
      className="py-4 flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
      href="/"
      aria-label="Brand"
    >
      Movie App
    </Link>
  );
};

export const NavListItems = () => {
  return (
    <div className={"gap-3 text-primary hidden md:flex"}>
      {NavItems.map((item) => (
        <Link key={item.name} href={item.path}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};
