import SearchForm from './SearchForm';

const SearchSection = () => {
	return (
		<section className='hero-content text-center text-slate-100'>
			<div className='max-w-xl'>
				<h1 className='mb-5 text-5xl font-bold'>
					Discover the latest blockbusters
				</h1>
				<p className='mb-10 text-slate-200'>
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
					excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
					id nisi.
				</p>
				<SearchForm />
			</div>
		</section>
	);
};

export default SearchSection;
