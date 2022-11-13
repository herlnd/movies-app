import { useState } from 'react';
import SearchForm from './SearchForm';

interface searchSectionType {
  scrollToSection: () => void;
  searchTerm: (value: string) => void;
}

const SearchSection = (props: searchSectionType) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const goToDiscoverHandler = () => {
    props.scrollToSection();
  };

  const showSearchTerm = (text: string) => {
    setSearchTerm(text);
  };

  props.searchTerm(searchTerm);

  return (
    <>
      <div className='flex flex-col justify-center items-center text-center pb-6 lg:pb-0'>
        <h1 className='px-8 text-2xl leading-6 font-bold mb-3 lg:mb-5 lg:text-5xl'>
          Discover the latest blockbusters
        </h1>
        <p className='text-slate-300 text-xs px-10 pb-6 leading-3 lg:text-lg'>
          See what movies are trending right now in theatres and on-demand
          platforms.
        </p>
        <button
          className='btn btn-md text-xs w-1/3 font-bold bg-slate-100 border-none text-gray-800 hover:bg-slate-300 md:btn-md lg:text-base md:w-32'
          onClick={goToDiscoverHandler}
        >
          Discover
        </button>
        <div className='divider w-3/4 text-xs text-slate-300 font-medium self-center py-2 lg:w-1/3 lg:py-4 lg:text-base'>
          OR
        </div>
        <p className='font-bold text-sm pb-3 lg:text-lg lg:pb-6'>
          Take your pick!
        </p>
        <SearchForm searchTerm={showSearchTerm} />
      </div>
    </>
  );
};

export default SearchSection;
