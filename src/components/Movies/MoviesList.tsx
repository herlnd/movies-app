import React from 'react';
import useUrl from '../../hooks/useUrl';
import useFetch from '../../hooks/useFetchMovies';
import Carousel from '../Carousel/Carousel';
import Poster from './Poster';
import { Link } from 'react-router-dom';
import { MoviesListData } from '../../models/MoviesListTypes';

const MoviesList = React.forwardRef<HTMLElement>((props, ref) => {
  const url = useUrl('discover');
  const trendingMovies: MoviesListData[] = useFetch(url);

  const topTwenty = trendingMovies.map((movie, index) => {
    return (
      <Link key={movie.id} to={`/movie/${movie.id}`}>
        <Poster {...movie} index={index} showIndex={true} />
      </Link>
    );
  });

  return (
    <section ref={ref} className='w-full'>
      <h1 className='text-xl font-bold pb-2 lg:text-2xl lg:pb-4'>
        Trending Movies
      </h1>
      <Carousel displayElements={topTwenty} />
    </section>
  );
});

export default MoviesList;
