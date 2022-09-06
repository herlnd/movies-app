export interface Movie {
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

export interface MoviesListResponse {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

export interface MovieDetailsType {
	id: number;
	title: string;
	posterUrl: string;
	backdropUrl: string;
	rating: number;
	genreIds: number[];
	overview: string;
	releaseDate: string;
}

export interface Poster extends MovieDetailsType {
	index: number;
}
