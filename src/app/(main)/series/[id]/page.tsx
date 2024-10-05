import TVShow from "@/components/TVShow";
import { getTMDbData } from "@/lib/client";

const ShowPage = async ({ params }: { params: { id: string } }) => {
  const showData = await getTMDbData<ITVShowData>("tv", params.id);

  return <main className="mt-16">{<TVShow showData={showData} />}</main>;
};

export default ShowPage;
