import { PosterType } from '../../models/MoviesListTypes';
import { HeartIcon, TrendingIcon } from '../Icons';

const Poster = (props: PosterType) => {
  const { title, posterUrl, rating, index, showIndex } = props;

  // Styles
  const bgAnimation =
    'opacity-0 group-hover:opacity-50 transition ease-in-out duration-300';
  const overlayStyles = `invisible group-hover:visible absolute inset-0 rounded-lg bg-black ${bgAnimation}`;

  const commonStyle =
    'flex items-center justify-center invisble group-hover:visible opacity-0 absolute right-0 bg-slate-100 text-gray-800 font-bold group-hover:opacity-100 transition ease-in-out duration-300';
  const trendingStyles = `${commonStyle} flex-col gap-1 top-0 font-bold p-2 rounded-tr-lg rounded-bl-lg`;
  const ratingStyles = `${commonStyle} gap-2 bottom-0 font-bold p-1 rounded-br-lg rounded-tl-lg`;

  // Img
  const imgUrl = `https://image.tmdb.org/t/p/original${posterUrl}`;

  return (
    <div className={`relative group w-24 aspect-[2/3] rounded-lg lg:w-48`}>
      <img
        className='rounded-lg w-full h-full'
        src={`${imgUrl}`}
        alt={`${title} movie poster`}
      />
      <div className={overlayStyles}></div>
      {showIndex ? (
        <span className={trendingStyles}>
          <TrendingIcon />
          {`${index + 1}`}
        </span>
      ) : null}
      <span className={ratingStyles}>
        <HeartIcon /> {` ${rating} / 10`}
      </span>
    </div>
  );
};

export default Poster;
