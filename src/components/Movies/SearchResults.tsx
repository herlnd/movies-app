import { Link, Search } from 'react-router-dom';
import useUrl from '../../hooks/useUrl';
import useFetch from '../../hooks/useFetchMovies';
import { MoviesListData } from '../../models/MoviesListTypes';
import Poster from './Poster';
import RatingFilter from './RatingFilter';
import { useState } from 'react';
import Carousel from '../Carousel/Carousel';

interface SearchResultsType {
  searchTerm: string;
}

const SearchResults = (props: SearchResultsType) => {
  const [rating, setRating] = useState(0);

  const url = useUrl('search', props.searchTerm);
  const trendingMovies: MoviesListData[] = useFetch(url);

  const topTen = trendingMovies
    .slice(0, 10)
    .filter((movie) => movie.rating > rating)
    .map((movie, index) => {
      return (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <Poster {...movie} index={index} showIndex={false} />
        </Link>
      );
    });

  const filterHandler = (value: number) => {
    setRating(value);
  };

  return (
    <>
      {trendingMovies.length > 0 ? (
        <section className='flex-col px-2 pt-4 lg:px-8 lg:pt-6 items-center'>
          <h1 className='text-xl lg:text-3xl lg:pb-4 text-slate-100 font-bold'>
            Search Results
          </h1>
          <div className='py-4'>
            <RatingFilter ratingValue={filterHandler} />
          </div>
          <div className='w-full'>
            <Carousel displayElements={topTen} />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default SearchResults;
