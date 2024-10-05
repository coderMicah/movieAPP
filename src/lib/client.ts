import ky, { Options, SearchParamsOption } from "ky"

type urlType = 'movie' | 'tv' | 'person'
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

const client = ky.create({ prefixUrl: `https://api.themoviedb.org/3`, headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } });

const getTMDBList = async <T>(option: urlType, searchParams?: SearchParamsOption) => {
    let url = `/discover/${option}?language=en-US`
    if (option === "person") {
        url = `/person/popular?language=en-US`;
    }
    const promise = client.extend((options) => ({ prefixUrl: `${options.prefixUrl}${url}` }))
    const data = await promise.get("", { searchParams }).json<IPaginatedResponse<T>>()
    return data;
}

async function getTMDbData<T>(
    type: urlType,
    id: string | number,
    options?: Options
): Promise<T> {
    const promise = client.extend((options) => ({ prefixUrl: `${options.prefixUrl}/${type}/${id}?language=en-US` }));
    const data = await promise.get("", options).json<T>();
    return data;
}

const getTMDBVideos = async (type: Exclude<urlType, 'person'>, id: number | string, options?: Options): Promise<IVideoData> => {
    return await client.get(`${type}/${id}/videos`, options).json<IVideoData>();
}


export {
    client,
    getTMDBList,
    getTMDBVideos,
    getTMDbData
}

