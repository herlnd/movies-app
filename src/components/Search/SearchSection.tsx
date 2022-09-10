import { useState } from "react";
import SearchForm from "./SearchForm";

interface searchSectionType {
  scrollToSection: () => void;
  searchTerm: (value: string) => void;
}

const SearchSection = (props: searchSectionType) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const goToDiscoverHandler = () => {
    props.scrollToSection();
  };

  const showSearchTerm = (text: string) => {
    setSearchTerm(text);
  };

  props.searchTerm(searchTerm);

  return (
    <section className="hero-content text-center text-slate-100">
      <div className="max-w-xl">
        <h1 className="mb-5 text-5xl font-bold">
          Discover the latest blockbusters
        </h1>
        <p className="text-slate-200 text-lg pb-6">
          See what movies are trending right now on theatres and on-demand
          platforms.
        </p>
        <button
          className="btn w-32 bg-slate-100 border-slate-100 text-gray-800 hover:bg-slate-300 hover:border-slate-300"
          onClick={goToDiscoverHandler}
        >
          Discover
        </button>
        <div className="divider py-4 font-medium">OR</div>
        <p className="text-slate-100 text-lg pb-6">Take your pick!</p>
        <SearchForm searchTerm={showSearchTerm} />
      </div>
    </section>
  );
};

export default SearchSection;
