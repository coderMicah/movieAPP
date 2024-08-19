"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon, BoxesIcon, FilterIcon } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { useState } from "react";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const Sort = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <>
      {/* Title and sort  */}
      <div className="flex items-center">
        <Menubar className="relative inline-block text-left">
          <MenubarMenu>
            <div>
              <MenubarTrigger className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                />
              </MenubarTrigger>
            </div>

            <MenubarContent className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="py-1">
                {sortOptions.map((option) => (
                  <MenubarItem key={option.name}>
                    <a
                      href={option.href}
                      className={cn(
                        option.current
                          ? "font-medium text-gray-900"
                          : "text-gray-500",
                        "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                      )}
                    >
                      {option.name}
                    </a>
                  </MenubarItem>
                ))}
              </div>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <button
          type="button"
          onClick={() => setMobileFiltersOpen(true)}
          className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
        >
          <span className="sr-only">Filters</span>
          <FilterIcon aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};

export default Sort;
