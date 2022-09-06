// import { useContext } from 'react';
// import { DataContext } from '../../context/DataContext';
import type { MovieDetailsType } from '../../models/Movies';

interface DetailProps {
	movieDetails: MovieDetailsType;
}

const MovieDetails = (props: DetailProps) => {
	const {
		movieDetails: { title, posterUrl, rating, overview, releaseDate },
	} = props;

	// const { data: movie } = useContext(DataContext);

	return (
		<main className='flex justify-center gap-8 items-start'>
			<img
				className='w-64 rounded-lg'
				src={`https://image.tmdb.org/t/p/original${posterUrl}`}
				alt={title}
			/>
			<section className='w-96 flex flex-col bg-gray-800 p-4 rounded-lg'>
				<h1 className='text-3xl text-slate-100 font-bold pb-8'>{title}</h1>
				<p>{`${rating} / 10`}</p>
				<p className='text-slate-100 '>{overview}</p>
				<div className='flex mt-4 gap-4'>
					<p>{`released: ${releaseDate}`}</p>
					<p className='badge bg-slate-100 text-gray-800'>Action</p>
					<p className='badge bg-slate-100 text-gray-800'>War</p>
				</div>
			</section>
		</main>
	);
};

export default MovieDetails;
