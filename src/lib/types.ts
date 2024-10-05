interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ITVShow {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

interface IPerson {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string
}


interface IPaginatedResponse<T> {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}

type ImageSize = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';


interface ICollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface IGenre {
  id: number;
  name: string;
}

interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}



interface IMovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};


interface IVideoData {
  id: number;
  results: IMovieVideo[];
}

interface ICreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
}

interface ILastEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

interface INetwork {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ISeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface IMovieData extends Omit<IMovie, 'genre_ids'> {
  belongs_to_collection: ICollection | null;
  budget: number;
  genres: IGenre[];
  homepage: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  revenue: number;
}

interface ITVShowData extends Omit<ITVShow, 'genre_ids'> {
  created_by: ICreatedBy[];
  episode_run_time: number[];
  genres: IGenre[];
  homepage: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: ILastEpisodeToAir;
  next_episode_to_air: null | object;
  networks: INetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  seasons: ISeason[];
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
}

interface IPersonData extends IPerson {
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  homepage: string | null;
  imdb_id: string;
  place_of_birth: string | null;
}