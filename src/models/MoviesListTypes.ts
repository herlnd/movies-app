export interface MovieType {
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

export interface MoviesListRawData {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}

export interface MoviesListData {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
}

export interface PosterType extends MoviesListData {
  index: number;
  showIndex: boolean;
}
