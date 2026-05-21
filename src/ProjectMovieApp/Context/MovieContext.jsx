import React, {createContext,useState,useEffect} from "react";

import {fetchPopularMovies,fetchSearchMovies,fetchTvShows,fetchTrendingMovies} from "../api/axios";

import useDebounce from "../hooks/useDebounce";


export const MovieContext =createContext();
const MovieContextProvider = ({ children}) => {

  const [popularMovies,setPopularMovies] = useState([]);

  const [tvshow,setTvshow] = useState([]);

  const [trendingMovies,setTrendingMovies] = useState([]);

  const [loading,setLoading] = useState(false);

  const [search,setSearch] = useState("");

  const [moviesPage,setMoviesPage] = useState(1);

  const [tvPage,setTvPage] = useState(1);

  const [trendingPage,setTrendingPage] = useState(1);

  const { debounceValue } =useDebounce({search,delay: 1500});
  useEffect(() => {

    const fetchMovies =
      async () => {

        setLoading(true);

        try {

          if (!debounceValue) {

            const moviesRes =
              await fetchPopularMovies(
                moviesPage
              );

            setPopularMovies(
              moviesRes
            );

          } else {

            const moviesRes =
              await fetchSearchMovies(
                debounceValue,
                moviesPage
              );

            setPopularMovies(
              moviesRes
            );
          }

        } catch (error) {

          console.error(
            "Movies Error:",
            error
          );

        } finally {

          setLoading(false);
        }
      };

    fetchMovies();

  }, [
    moviesPage,
    debounceValue,
  ]);

  /* TV SHOWS */

  useEffect(() => {

    const fetchTv =
      async () => {

        try {

          const tvRes =
            await fetchTvShows(
              tvPage
            );

          setTvshow(tvRes);

        } catch (error) {

          console.error(
            "TV Error:",
            error
          );
        }
      };

    fetchTv();

  }, [tvPage]);

  /* TRENDING MOVIES */

  useEffect(() => {

    const fetchTrending =
      async () => {

        try {

          const trendingRes =
            await fetchTrendingMovies(
              trendingPage
            );

          setTrendingMovies(
            trendingRes
          );

        } catch (error) {

          console.error(
            "Trending Error:",
            error
          );
        }
      };

    fetchTrending();

  }, [trendingPage]);

  /* HOME PAGINATION */

  const handleMoviesNext =
    () => {

      setMoviesPage(
        (prev) => prev + 1
      );
    };

  const handleMoviesPrev =
    () => {

      setMoviesPage(
        (prev) =>
          prev > 1
            ? prev - 1
            : prev
      );
    };

  /* TV PAGINATION */

  const handleTvNext =
    () => {

      setTvPage(
        (prev) => prev + 1
      );
    };

  const handleTvPrev =
    () => {

      setTvPage(
        (prev) =>
          prev > 1
            ? prev - 1
            : prev
      );
    };

  /* TRENDING PAGINATION */

  const handleTrendingNext =
    () => {

      setTrendingPage(
        (prev) => prev + 1
      );
    };

  const handleTrendingPrev =
    () => {

      setTrendingPage(
        (prev) =>
          prev > 1
            ? prev - 1
            : prev
      );
    };

  return (

    <MovieContext.Provider
      value={{

        popularMovies,
        tvshow,
        trendingMovies,

        loading,

        search,
        setSearch,

        /* HOME */
        moviesPage,
        handleMoviesNext,
        handleMoviesPrev,

        /* TV */
        tvPage,
        handleTvNext,
        handleTvPrev,

        /* TRENDING */
        trendingPage,
        handleTrendingNext,
        handleTrendingPrev,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;