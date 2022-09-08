import SearchForm from './SearchForm';

const SearchSection = () => {
	return (
		<section className='hero-content text-center text-slate-100'>
			<div className='max-w-xl'>
				<h1 className='mb-5 text-5xl font-bold'>
					Discover the latest blockbusters
				</h1>
				<p className='text-slate-200 text-lg'>
					See what movies are trending right now on theatres and on-demand
					platforms.
				</p>
				<button className='btn btn-primary'>Discover</button>
				<div className='divider'>OR</div>
				<p className='text-slate-100 text-lg'>Search for any movie!</p>
				<SearchForm />
			</div>
		</section>
	);
};

export default SearchSection;
