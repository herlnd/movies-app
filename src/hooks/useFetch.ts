import { useState, useEffect } from 'react';
import { MoviesListResponse } from '../models/Movies';

interface sentData {
	id: number;
	title: string;
	posterUrl: string;
	backdropUrl: string;
	rating: number;
	genre_ids: number[];
	overview: string;
	release_date: string;
}

const useFetch = (url: string) => {
	const [data, setData] = useState<sentData[]>([]);

	const fetchHandler = async (url: string) => {
		const response = await fetch(url);
		const data: MoviesListResponse = await response.json();
		const movies = await data.results;

		const moviesData = movies.map((movie) => {
			const {
				id,
				title,
				poster_path: posterUrl,
				backdrop_path: backdropUrl,
				vote_average: rating,
				genre_ids: genreIds,
				overview,
				release_date: releaseDate,
			} = movie;
			return {
				id,
				title,
				posterUrl,
				backdropUrl,
				rating,
				genreIds,
				overview,
				releaseDate,
			};
		});

		setData(moviesData);
	};

	useEffect(() => {
		fetchHandler(url);
	}, []);

	return data;
};

export default useFetch;
