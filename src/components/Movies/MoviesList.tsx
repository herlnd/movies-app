import React from 'react';
import { Link } from 'react-router-dom';
import useUrl from '../../hooks/useUrl';
import useFetch from '../../hooks/useFetchMovies';
import { MoviesListData } from '../../models/MoviesListTypes';
import Poster from './Poster';
import Carousel from '../Carousel/Carousel';

const MoviesList = React.forwardRef<HTMLElement>((props, ref) => {
  const url = useUrl('discover');
  const trendingMovies: MoviesListData[] = useFetch(url);

  const topTwenty = trendingMovies.slice(0, 20).map((movie, index) => {
    return (
      <Link key={movie.id} to={`/movie/${movie.id}`}>
        <Poster {...movie} index={index} showIndex={true} />
      </Link>
    );
  });

  return (
    <section
      ref={ref}
      className='w-full flex flex-col items-start justify-center px-2 lg:p-8'
    >
      <h1 className='text-xl text-slate-100 font-bold pt-4 pb-2 lg:pt-0 lg:pb-6 lg:text-3xl'>
        Trending movies
      </h1>
      <Carousel displayElements={topTwenty} />
    </section>
  );
});

export default MoviesList;
