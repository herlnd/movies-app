import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const MovieDetails = () => {
	const { data: movie } = useContext(DataContext);

	const { title, posterUrl, rating, genreIds, overview, releaseDate } = movie;

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
