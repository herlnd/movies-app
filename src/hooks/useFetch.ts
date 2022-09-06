import { useState, useEffect } from 'react';
import { MovieDetailsType, MoviesListResponse } from '../models/Movies';

const useFetch = (url: string) => {
	const [data, setData] = useState<MovieDetailsType[]>([]);

	const fetchHandler = async (url: string) => {
		const response = await fetch(url);
		const data: MoviesListResponse = await response.json();
		const movies = data.results;

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
