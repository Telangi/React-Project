import React, { createContext, useContext, useState } from 'react';

import {fetchPersonDetails,fetchPersonMovies,fetchPersonImages} from '../api/axios';

const PersonDetailsContext = createContext();

const PersonDetailsProvider = ({ children }) => {
  const [personDetails, setPersonDetails] = useState(null);
  const [personMovies, setPersonMovies] = useState([]);
  const [personImages, setPersonImages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getPersonDetails(personId) {
    try {
      setLoading(true);

      const details = await fetchPersonDetails(personId);
      const movies = await fetchPersonMovies(personId);
      const images = await fetchPersonImages(personId);

      setPersonDetails(details);
      setPersonMovies(movies.cast);
      setPersonImages(images.profiles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PersonDetailsContext.Provider
      value={{
        personDetails,
        personMovies,
        personImages,
        loading,
        getPersonDetails,
      }}
    >
      {children}
    </PersonDetailsContext.Provider>
  );
};

const usePersonDetails = () =>
  useContext(PersonDetailsContext);

export {PersonDetailsProvider,usePersonDetails};