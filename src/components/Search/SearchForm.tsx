import React, { useState, useRef, FormEvent } from 'react';
import { SearchIcon } from '../Icons';

interface SearchType {
  searchTerm: (value: string) => void;
}

const Search = (props: SearchType) => {
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  props.searchTerm(searchTerm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className='form-control w-full px-2 lg:px-0' onSubmit={formHandler}>
      <div className='input-group flex justify-center items-center'>
        <input
          type='text'
          placeholder='Search movies…'
          className='w-11/12 md:w-9/12 lg:w-2/5 input border-none bg-slate-50 text-gray-800'
          value={searchTerm}
          onChange={handleChange}
          ref={searchRef}
        />
        <div className='btn btn-square bg-slate-50 border-none text-gray-800 pointer-events-none'>
          <SearchIcon />
        </div>
      </div>
    </form>
  );
};

export default Search;
