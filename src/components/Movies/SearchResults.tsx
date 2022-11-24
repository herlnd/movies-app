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
    .filter((movie) => movie.rating > rating);

  const filteredMovies =
    topTen.length > 0
      ? topTen.map((movie, index) => {
          return (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <Poster {...movie} index={index} showIndex={false} />
            </Link>
          );
        })
      : 'No movies matching that rating';

  const filterHandler = (value: number) => {
    setRating(value);
  };

  return (
    <section className='w-full'>
      {trendingMovies.length > 0 ? (
        <section className='pb-4 lg:pb-8'>
          <h1 className='text-xl font-bold pb-2 lg:text-2xl lg:pb-4'>
            Top Results
          </h1>
          <div className='pb-4'>
            <RatingFilter ratingValue={filterHandler} />
          </div>
          <Carousel displayElements={filteredMovies} />
        </section>
      ) : null}
    </section>
  );
};

export default SearchResults;
