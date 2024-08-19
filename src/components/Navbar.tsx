
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
  items?: Array<{ name: string; path: string; icon?: ReactNode }>;
}

const NavItems: INavItems[] = [
  {
    name: "Movies",
    path: "/popular",
    items: [
      {
        name: "popular",
        path: "/popular",
      },
      {
        name: "now-playing",
        path: "/now-playing",
      },
      {
        name: "upcoming",
        path: "/upcoming",
      },
      {
        name: "top-rated",
        path: "/top-rated",
      },
    ],
  },
  {
    name: "Series",
    path: "/popular",
    items: [
      {
        name: "popular",
        path: "/popular",
      },
      {
        name: "airing today",
        path: "/airing-today",
      },
      {
        name: "on tv",
        path: "/on-tv",
      },
      {
        name: "top-rated",
        path: "/top-rated",
      },
    ],
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

              <NavListItems  />
            </SheetContent>
          </Sheet>
        </div>

        {/* NavItems */}
        <NavListItems/>
      </nav>
    </header>
  );
};

export default Navbar;

export const Logo = () => {
  return (
    <Link
      className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
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
        <NavigationMenu key={item.name}>
          <NavigationMenuList>
            {item.items ? (
              <NavigationMenuItem>
                <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[130px]">
                    {item.items.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={ `/${item.name.toLowerCase()}${subItem.path}` }
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={cn(
                              "group flex max-w-full h-10  items-start justify-start rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors",
                              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                              "capitalize"
                            )}
                          >
                            {subItem.name}
                            
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem>
                <Link href={item.path} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      ))}
    </div>
  );
};
