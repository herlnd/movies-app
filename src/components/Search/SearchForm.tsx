import React, { useState, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import useUrl from '../../hooks/useUrl';

import { SearchIcon } from '../Icons';

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const searchRef = useRef<HTMLInputElement>(null);

	const clickHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		console.log(searchRef.current?.value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.currentTarget.value);
	};

	const url = useUrl('search', searchTerm);
	const someMovies = useFetch(url);
	console.log(someMovies);

	return (
		<form className='form-control'>
			<div className='input-group'>
				<input
					type='text'
					placeholder='Search movies…'
					className='w-full input input-bordered bg-slate-50 text-gray-800'
					value={searchTerm}
					onChange={handleChange}
					ref={searchRef}
				/>
				<button
					type='submit'
					onClick={clickHandler}
					className='btn btn-square bg-slate-100 border-slate-100 text-gray-800 hover:bg-gray-800 hover:border-gray-800 hover:text-slate-100'
				>
					<SearchIcon />
				</button>
			</div>
		</form>
	);
};

export default Search;
