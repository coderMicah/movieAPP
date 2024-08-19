import ky from "ky"

const ACCESS_TOKEN = process.env.ACCESS_TOKEN



const client = ky.create({ prefixUrl: `https://api.themoviedb.org/3/movie`, headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } });

const popularMovies = client.extend((options) => ({ prefixUrl: `${options.prefixUrl}/popular?language=en-US&page=1` }));
const nowPlayingMovies = client.extend((options) => ({ prefixUrl: `${options.prefixUrl}/now_playing?language=en-US&page=1` }));
const upcomingMovies = client.extend((options) => ({ prefixUrl: `${options.prefixUrl}/upcoming?language=en-US&page=1` }));
const topRatedMovies = client.extend((options) => ({ prefixUrl: `${options.prefixUrl}/top_rated?language=en-US&page=1` }));

// const response = await usersApi.get('123');
//=> 'https://example.com/api/users/123'

// const response = await api.get('version');
//=> 'https://example.com/api/version


export {
    client,
    popularMovies,
    nowPlayingMovies,
    upcomingMovies,
    topRatedMovies
}

