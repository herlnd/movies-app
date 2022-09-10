import { useState, useEffect } from "react";
import type {
  MovieDataType,
  MovieDetailsType,
} from "../models/MovieDetailsType";

const useFetchDetails = (url: string) => {
  const [data, setData] = useState<MovieDetailsType>({
    title: "",
    overview: "",
    year: 0,
    rating: 0,
    backdropUrl: "",
    posterUrl: "",
    genresArr: [],
  });

  const fetchHandler = async (url: string) => {
    const response = await fetch(url);
    const movieData: MovieDataType = await response.json();

    const {
      title,
      overview,
      release_date: releaseDate,
      vote_average: rating,
      backdrop_path: backdropUrl,
      poster_path: posterUrl,
      genres: genresArr,
    } = movieData;

    const year = new Date(releaseDate).getFullYear();

    const movieDetailsData = {
      title,
      overview,
      year,
      rating,
      backdropUrl,
      posterUrl,
      genresArr,
    };

    setData(movieDetailsData);
  };

  useEffect(() => {
    fetchHandler(url);
  }, [url]);

  return data;
};

export default useFetchDetails;
