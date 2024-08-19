import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { PlusIcon, MinusIcon } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const filters = [
  {
    id: "genre",
    name: "Genre",
    options: [
      { value: "action", label: "action", checked: false },
      { value: "adventure", label: "adventure", checked: false },
      { value: "animation", label: "animation", checked: true },
      { value: "comedy", label: "comedy", checked: false },
      { value: "crime", label: "crime", checked: false },
      { value: "documentary", label: "documentary", checked: false },
      { value: "drama", label: "drama", checked: false },
      { value: "family", label: "family", checked: false },
      { value: "fantasy", label: "fantasy", checked: true },
      { value: "history", label: "history", checked: false },
      { value: "music", label: "music", checked: false },
      { value: "war", label: "war", checked: false },
    ],
  },
  {
    id: "certification",
    name: "Certification",
    options: [
      { value: "U", label: "U", checked: false },
      { value: "10", label: "10", checked: false },
      { value: "12", label: "12", checked: false },
      { value: "16", label: "16", checked: false },
      { value: "18", label: "18", checked: true },
    ],
  },

  {
    id: "availabilities",
    name: "Availabilities",
    options: [
      { value: "stream", label: "stream", checked: false },
      { value: "free", label: "free", checked: false },
      { value: "ads", label: "ads", checked: false },
      { value: "rent", label: "rent", checked: false },
      { value: "buy", label: "buy", checked: false },
    ],
  },
];

const Filters = () => {
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
                        <input
                          defaultValue={option.value}
                          defaultChecked={option.checked}
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
        </div>
      </ScrollArea>
    </div>
  );
};

export default Filters;

// todo -> clear filters
