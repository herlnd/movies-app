import Hero from "../components/Layout/Hero";
import SearchSection from "../components/Search/SearchSection";
import MoviesList from "../components/Movies/MoviesList";
import Layout from "../components/Layout/Layout";
import { useRef, useState } from "react";
import SearchResults from "../components/Movies/SearchResults";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
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
        <SearchResults searchTerm={searchTerm} />
        <MoviesList ref={discoverRef} />
      </>
    </Layout>
  );
};

export default Home;
