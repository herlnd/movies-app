import Hero from '../components/Layout/Hero';
import SearchSection from '../components/Search/SearchSection';
import MoviesList from '../components/Movies/MoviesList';
import Layout from '../components/Layout/Layout';

const Home = () => {
	return (
		<Layout>
			<>
				<Hero>
					<SearchSection />
				</Hero>
				<MoviesList />
			</>
		</Layout>
	);
};

export default Home;
