import useFetchDetails from '../../hooks/useFetchDetails';
import useUrl from '../../hooks/useUrl';
import { useParams } from 'react-router-dom';
import { HeartIcon, CalendarIcon, ArrowIcon } from '../Icons';
import { Genre, MovieDetailsType } from '../../models/MovieDetailsType';
import { Link } from 'react-router-dom';

interface MovieDetailsProps {
  setBackgroundImg: (bgImg: string) => void;
}

const MovieDetails = (props: MovieDetailsProps) => {
  const { movieId } = useParams();
  const url = useUrl('getMovie', movieId);
  const movieDetails: MovieDetailsType = useFetchDetails(url);
  const { title, overview, year, rating, backdropUrl, posterUrl, genresArr } =
    movieDetails;
  props.setBackgroundImg(backdropUrl);

  return (
    <div className='flex flex-col items-center justify-center'>
      <main className='flex flex-col lg:flex-row items-center lg:justify-center lg:gap-8 lg:items-start'>
        <img
          className='w-11/12 mb-2 rounded-lg lg:mb-0 lg:block lg:w-64'
          src={`https://image.tmdb.org/t/p/original${posterUrl}`}
          alt={title}
        />
        <section className='w-11/12 lg:w-96 flex flex-col bg-[#171717] p-4 rounded-lg'>
          <h1 className='text-3xl text-slate-100 font-bold pb-4'>{title}</h1>
          <div className='flex gap-6 pb-4 text-slate-100'>
            <div className='flex gap-2 items-center'>
              <CalendarIcon />
              <span>{year}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <HeartIcon />
              <span>{`${rating.toFixed(1)} / 10`}</span>
            </div>
          </div>
          <p className='text-slate-100 '>{overview}</p>
          <div className='flex mt-4 gap-4 flex-wrap'>
            {genresArr.map((genre: Genre) => {
              return (
                <p className='h-fit badge bg-slate-100 text-gray-800'>
                  {genre.name}
                </p>
              );
            })}
          </div>
        </section>
      </main>
      <div className='my-4'>
        <Link to='/'>
          <button className='btn bg-slate-100 border-none text-gray-800 hover:bg-slate-300'>
            <ArrowIcon />
            <span className='pl-2'>Go Back</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
