import React from "react";
import PersonCard from "./PersonCard";

const People = ({ people }: { people: IPerson[] }) => {
  return (
    <div className="layoutContainer">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 my-6 mt-24">
        People
      </h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {people.map((person) => (
          <PersonCard
            key={person.id}
            imageSrc={person.profile_path}
            href={person.id}
            name={person.original_name}
          />
        ))}
      </div>
    </div>
  );
};

export default People;
