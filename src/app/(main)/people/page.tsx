import DataPagination from "@/components/DataPagination";
import People from "@/components/People";
import { getTMDBList } from "@/lib/client";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = searchParams.page || "1";
  const sP = new URLSearchParams();
  sP.append("page", page);

  const data = await getTMDBList<IPerson>("person", sP);

  return (
    <div className="mt-16">
      <People people={data.results} />
      <DataPagination
        className={"my-10"}
        page={data.page}
        total_pages={data.total_pages}
        total_results={data.total_results}
      />
    </div>
  );
};

export default page;
