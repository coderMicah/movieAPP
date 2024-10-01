"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { PlusIcon, MinusIcon } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  MouseEvent,
  useCallback,
  useOptimistic,
  useState,
  useTransition,
} from "react";
import {
  parseSearchParams,
  SearchParams,
  stringifySearchParams,
} from "@/lib/state-url";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

const tvGenres = [
  { value: "10759", label: "Action & Adventure", checked: false },
  { value: "16", label: "Animation", checked: false },
  { value: "35", label: "Comedy", checked: false },
  { value: "80", label: "Crime", checked: false },
  { value: "99", label: "Documentary", checked: false },
  { value: "18", label: "Drama", checked: false },
  { value: "10751", label: "Family", checked: false },
  { value: "10762", label: "Kids", checked: false },
  { value: "9648", label: "Mystery", checked: false },
  { value: "10763", label: "News", checked: false },
  { value: "10764", label: "Reality", checked: false },
  { value: "10765", label: "Sci-Fi & Fantasy", checked: false },
  { value: "10766", label: "Soap", checked: false },
  { value: "10767", label: "Talk", checked: false },
  { value: "10768", label: "War & Politics", checked: false },
  { value: "37", label: "Western", checked: false },
];

const movieGenres = [
  { value: "28", label: "action", checked: false },
  { value: "12", label: "Adventure", checked: false },
  { value: "16", label: "Animation", checked: false },
  { value: "35", label: "Comedy", checked: false },
  { value: "80", label: "Crime", checked: false },
  { value: "99", label: "Documentary", checked: false },
  { value: "18", label: "Drama", checked: false },
  { value: "10751", label: "Family", checked: false },
  { value: "14", label: "Fantasy", checked: false },
  { value: "36", label: "History", checked: false },
  { value: "10402", label: "Music", checked: false },
  { value: "10752", label: "War", checked: false },
];

const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //use transition hook
  const [isPending, startTransition] = useTransition();

  //convert searchParams to an object
  const initialFilters = parseSearchParams(Object.fromEntries(searchParams));

  //initialize optimisticFiltersState with searchParams object
  const [optimisticFilters, setOptimisticFilters] =
    useOptimistic<SearchParams>(initialFilters);

  const updateURL = (newFilters: SearchParams) => {
    const queryString = stringifySearchParams(newFilters);
    router.push(queryString ? `${pathname}?${queryString}` : "/");
  };

  //change optimisticFiltersState and updateURL
  const handleFilterChange = (
    filterType: keyof SearchParams,
    value: string | undefined
  ) => {
    startTransition(() => {
      const newFilters = { ...optimisticFilters, [filterType]: value };
      setOptimisticFilters(newFilters);
      updateURL(newFilters);
    });
  };

  //this takes care for existing filter selection on same category
  //remove existing category with new selected category
  const handleListToggle = (genres: string) => {
    startTransition(() => {
      const newGenres = genres.split(",");
      const currentGenres = optimisticFilters.genre?.split(",") || [];

      // If the first Genre of the list is already in the filter, remove all Genres of this list
      if (currentGenres.includes(newGenres[0])) {
        const updatedGenres = currentGenres.filter(
          (genre) => !newGenres.includes(genre)
        );
        handleFilterChange("genre", updatedGenres.join(",") || undefined);
      } else {
        // Otherwise, replace all current Genres with the new list
        handleFilterChange("genre", genres);
      }
    });
  };

  const handleClearFilters = () => {
    startTransition(() => {
      setOptimisticFilters({});
      router.push(`${pathname}`);
    });
  };

  const filters = [
    {
      id: "genre",
      name: "Genre",
      options: pathname.includes("series") ? tvGenres : movieGenres,
    },
    // {
    //   id: "certification",
    //   name: "Certification",
    //   options: [
    //     { value: "U", label: "U", checked: false },
    //     { value: "10", label: "10", checked: false },
    //     { value: "12", label: "12", checked: false },
    //     { value: "16", label: "16", checked: false },
    //     { value: "18", label: "18", checked: true },
    //   ],
    // },

    // {
    //   id: "availabilities",
    //   name: "Availabilities",
    //   options: [
    //     { value: "stream", label: "stream", checked: false },
    //     { value: "free", label: "free", checked: false },
    //     { value: "ads", label: "ads", checked: false },
    //     { value: "rent", label: "rent", checked: false },
    //     { value: "buy", label: "buy", checked: false },
    //   ],
    // },
  ];

  return (
    <div className="border-2 border-gray-50 h-full">
      <ScrollArea className="h-screen">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <form className="hidden lg:block">
            <h3 className=" border-gray-200 py-6 font-semibold">Filters</h3>
            {filters.map((section) => (
              <Collapsible
                key={section.id}
                className="border-b border-gray-200 py-6"
              >
                <h3 className="-my-3 flow-root">
                  <CollapsibleTrigger className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span className="font-medium text-gray-900">
                      {section.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="h-5 w-5 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </CollapsibleTrigger>
                </h3>
                <CollapsibleContent className="pt-6">
                  {/* <ScrollArea className="h-[200px] p-2"> */}
                  <div className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <Checkbox
                          defaultValue={option.value}
                          // checked={option.checked}
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          checked={
                            optimisticFilters.genre?.split(",")[0] ===
                            option.value.split(",")[0]
                          }
                          onCheckedChange={() => handleListToggle(option.value)}
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  {/* </ScrollArea> */}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </form>

          {Object.keys(optimisticFilters).length > 0 && (
            <div className="p-4 border-t">
              <Button
                variant="outline"
                className="w-full"
                onClick={handleClearFilters}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Filters;

// todo -> clear filters
