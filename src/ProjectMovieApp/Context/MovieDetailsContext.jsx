import React, {createContext,useContext, useState,useEffect} from 'react';

import { useParams } from 'react-router-dom';

import {fetchMovieDetails, fetchMovieTrailer,} from '../api/axios';


export const MovieDetailsContext =createContext();

const MovieDetailsProvider = ({children}) => {

  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    if (!id) return;

    const fetchData = async () => {

      setLoading(true);

      try {

        const [
          movieRes,
          trailerRes,
        ] = await Promise.all([
          fetchMovieDetails(id),
          fetchMovieTrailer(id),
        ]);

        setMovie(movieRes);

        setTrailer(
          trailerRes?.results?.[0] || null
        );

      } catch (error) {

        console.error(
          'Error fetching movie details:',
          error
        );

      } finally {

        setLoading(false);

      }
    };

    fetchData();

  }, [id]);

  return (
    <MovieDetailsContext.Provider
      value={{
        movie,
        trailer,
        loading,
      }}
    >
      {children}
    </MovieDetailsContext.Provider>
  );
};

export const useMovieDetails = () =>
  useContext(MovieDetailsContext);

export default MovieDetailsProvider;