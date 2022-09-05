import { DataContext } from '../context/DataContext';
import { useContext } from 'react';

import Layout from '../components/Layout/Layout';
import Hero from '../components/Layout/Hero';
import MovieDetails from '../components/Movies/MovieDetails';

const Movie = () => {
	const { data } = useContext(DataContext);
	const { backdropUrl } = data;
	return (
		<Layout>
			<>
				<Hero bgImg={`https://image.tmdb.org/t/p/original${backdropUrl}`}>
					<MovieDetails movieData={data} />
				</Hero>
			</>
		</Layout>
	);
};

export default Movie;
