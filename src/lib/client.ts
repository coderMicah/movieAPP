import ky, { SearchParamsOption } from "ky"

const ACCESS_TOKEN = process.env.ACCESS_TOKEN

const client = ky.create({ prefixUrl: `https://api.themoviedb.org/3/discover`, headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } });

const getData = async <T>(option:string,searchParams?: SearchParamsOption) => {
    const promise = client.extend((options) => ({ prefixUrl: `${options.prefixUrl}/${option}?language=en-US` }))
    const data = await promise.get("", { searchParams }).json<IPaginatedResponse<T>>()
    return data;
}





export {
    client,
    getData
}

