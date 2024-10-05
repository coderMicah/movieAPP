
import PersonProfile from "@/components/Person";
import { getTMDbData } from "@/lib/client";
import React from "react";

const PersonPage = async ({ params }: { params: { id: string } }) => {
  const personData = await getTMDbData<IPersonData>("person", params.id);

  return (
    <main className="mt-16">
     <PersonProfile person={personData}/>
    </main>
  );
};

export default PersonPage;