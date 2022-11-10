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
        <h1 className='text-slate-200 px-8 text-2xl font-bold mb-3 lg:mb-5 lg:text-5xl'>
          Discover the latest blockbusters
        </h1>
        <p className='text-slate-200 text-xs px-10 pb-6 lg:text-lg'>
          See what movies are trending right now on theatres and on-demand
          platforms.
        </p>
        <button
          className='btn btn-sm bg-slate-100 border-slate-100 text-gray-800 text-xs font-bold hover:bg-slate-300 hover:border-slate-300 lg:btn-md lg:text-base lg:w-32'
          onClick={goToDiscoverHandler}
        >
          Discover
        </button>
        <div className='divider w-3/4 lg:w-1/3 py-2 self-center text-xs font-medium lg:py-4 lg:text-base'>
          OR
        </div>
        <p className='text-slate-100 text-sm pb-3 lg:text-lg lg:pb-6'>
          Take your pick!
        </p>
        <SearchForm searchTerm={showSearchTerm} />
      </div>
    </>
  );
};

export default SearchSection;
