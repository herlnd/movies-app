import Layout from '../components/Layout/Layout';
import Hero from '../components/Layout/Hero';
import MovieDetails from '../components/Movies/MovieDetails';
import { useState } from 'react';

const Movie = () => {
	const [background, setBackground] = useState('');
	const setBackgroundHandler = (bgImg: string) => {
		setBackground(bgImg);
	};

	return (
		<Layout>
			<Hero bgImg={`https://image.tmdb.org/t/p/original${background}`}>
				<MovieDetails setBackgroundImg={setBackgroundHandler} />
			</Hero>
		</Layout>
	);
};

export default Movie;
