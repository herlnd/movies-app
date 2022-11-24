import { useRef, useState } from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Layout/Hero';
import SearchSection from '../components/Search/SearchSection';
import SearchResults from '../components/Movies/SearchResults';
import MoviesList from '../components/Movies/MoviesList';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const discoverRef = useRef<HTMLElement | null>(null);

  const showSearchTerm = (text: string) => {
    setSearchTerm(text);
  };

  const scrollHandler = () => {
    discoverRef.current?.scrollIntoView();
  };

  return (
    <Layout>
      <>
        <Hero>
          <SearchSection
            scrollToSection={scrollHandler}
            searchTerm={showSearchTerm}
          />
        </Hero>
        <section className='bg-[#171717] w-full flex flex-col justify-start items-center px-2 py-4 lg:p-8'>
          <SearchResults searchTerm={searchTerm} />
          <MoviesList ref={discoverRef} />
        </section>
      </>
    </Layout>
  );
};

export default Home;
