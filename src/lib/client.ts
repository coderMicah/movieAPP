import ky, { Options, SearchParamsOption } from "ky"

const ACCESS_TOKEN = process.env.ACCESS_TOKEN

const client = ky.create({ prefixUrl: `https://api.themoviedb.org/3`, headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } });

const getData = async <T>(option: string, searchParams?: SearchParamsOption) => {
    const promise = client.extend((options) => ({ prefixUrl: `${options.prefixUrl}/discover/${option}?language=en-US` }))
    const data = await promise.get("", { searchParams }).json<IPaginatedResponse<T>>()
    return data;
}

const getMovieData = async <T>(movieId: string, options?: Options) => {
    const promise = client.extend((options) => ({ prefixUrl: `${options.prefixUrl}/movie/${movieId}?language=en-US` }))
    const data = await promise.get("", options).json<T>()
    return data;
}




export {
    client,
    getData,
    getMovieData
}

