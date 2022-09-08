import { Link } from 'react-router-dom';
import useUrl from '../../hooks/useUrl';
import useFetch from '../../hooks/useFetchMovies';
import Poster from './Poster';
import { MoviesListData } from '../../models/MoviesListTypes';

const MoviesList = () => {
	const url = useUrl('discover');
	const trendingMovies: MoviesListData[] = useFetch(url);

	const topTen = trendingMovies.slice(0, 10).map((movie, index) => {
		return (
			<Link key={movie.id} to={`/movie/${movie.id}`}>
				<Poster {...movie} index={index} />
			</Link>
		);
	});

	return (
		<section className='flex-col p-8 items-center'>
			<h1 className='text-3xl pb-8 text-slate-100 font-bold'>
				Trending movies
			</h1>
			<ol className='grid grid-cols-5 gap-8 place-items-center'>{topTen}</ol>
		</section>
	);
};

export default MoviesList;
