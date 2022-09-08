import { PosterType } from '../../models/MoviesListTypes';
import { HeartIcon, TrendingIcon } from '../Icons';

const Poster = (props: PosterType) => {
	const { title, posterUrl, rating, index } = props;

	// Styles
	const bgAnimation =
		'opacity-0 group-hover:opacity-50 transition ease-in-out duration-300';
	const overlayStyles = `invisible group-hover:visible absolute inset-0 rounded-lg bg-black ${bgAnimation}`;
	const trendingStyles =
		'flex flex-col gap-1 items-center invisible group-hover:visible absolute top-0 right-0 bg-slate-100 text-gray-800 font-bold p-2 rounded-tr-lg rounded-bl-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-300';
	const ratingStyles =
		'flex gap-2 items-center invisible group-hover:visible absolute bottom-0 right-0  bg-slate-100 text-gray-800  font-bold p-1 rounded-br-lg rounded-tl-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-300';
	// Img
	const imgPath = 'https://image.tmdb.org/t/p/';
	const size = 'original';
	const imgUrl = `${imgPath}${size}`;

	return (
		<li className='relative group'>
			<img
				className='rounded-lg'
				src={`${imgUrl}${posterUrl}`}
				alt={`${title} movie poster`}
			/>
			<div className={overlayStyles}></div>
			<span className={trendingStyles}>
				<TrendingIcon />
				{`${index + 1}`}
			</span>
			<span className={ratingStyles}>
				<HeartIcon /> {` ${rating} / 10`}
			</span>
		</li>
	);
};

export default Poster;
