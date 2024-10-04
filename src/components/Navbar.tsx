"use client";

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
import { useScroll } from "@/hooks/useScroll";

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
  const scrolled = useScroll(0);
  return (
    <header
      className={cn(
        "fixed top-0 z-50 flex h-16 w-full flex-wrap border-b bg-white transition-all dark:bg-neutral-800 md:flex-nowrap md:justify-start",
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0",
      )}
    >
      <nav
        className={
          "layoutContainer relative py-2 md:flex md:items-center md:justify-between md:gap-4"
        }
      >
        <div className="flex items-center justify-between gap-x-1">
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
      className="flex-none text-xl font-semibold text-black focus:opacity-80 focus:outline-none dark:text-white"
      href="/"
      aria-label="Brand"
    >
      Movie App
    </Link>
  );
};

export const NavListItems = () => {
  return (
    <div className={"hidden gap-8 text-primary md:flex"}>
      {NavItems.map((item) => (
        <Link key={item.name} href={item.path}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};
