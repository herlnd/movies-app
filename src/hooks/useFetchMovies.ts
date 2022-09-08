import { useState, useEffect } from 'react';
import { MoviesListRawData, MoviesListData } from '../models/MoviesListTypes';

const useFetchMovies = (url: string) => {
	const [data, setData] = useState<MoviesListData[]>([]);

	const fetchHandler = async (url: string) => {
		const response = await fetch(url);
		const data: MoviesListRawData = await response.json();
		const movies = data.results;

		const moviesData = movies.map((movie) => {
			const { id, title, poster_path: posterUrl, vote_average: rating } = movie;
			return {
				id,
				title,
				posterUrl,
				rating,
			};
		});

		setData(moviesData);
	};

	useEffect(() => {
		fetchHandler(url);
	}, [url]);

	return data;
};

export default useFetchMovies;
