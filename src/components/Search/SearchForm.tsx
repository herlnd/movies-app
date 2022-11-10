import React, { useState, useRef } from 'react';
import { SearchIcon } from '../Icons';

interface SearchType {
  searchTerm: (value: string) => void;
}

const Search = (props: SearchType) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  props.searchTerm(searchTerm);

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  return (
    <form className='form-control w-full px-4 lg:px-0'>
      <div className='input-group flex justify-center items-center'>
        <input
          type='text'
          placeholder='Search movies…'
          className='w-11/12 md:w-9/12 lg:w-2/5 input input-bordered bg-slate-50 text-gray-800'
          value={searchTerm}
          onChange={handleChange}
          ref={searchRef}
        />
        <button
          type='submit'
          onClick={clickHandler}
          className='btn btn-square bg-slate-100 border-slate-100 text-gray-800 hover:bg-slate-300 hover:border-slate-300'
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default Search;
