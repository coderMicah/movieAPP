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

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// Main Movie Interface
interface IMovieData extends Omit<IMovie, 'genre_ids'> {
  belongs_to_collection: ICollection | null;
  budget: number;
  genres: IGenre[];
  homepage: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  revenue: number;
}