import React, {Suspense,lazy,useContext} from "react";

import {BrowserRouter, Routes,Route,Navigate,} from "react-router-dom";

import Navbar from "./ProjectMovieApp/Components/Layouts/Navbar/Navbar";

import Footer from "./ProjectMovieApp/Components/Layouts/Footer/Footer";

import Loader from "./ProjectMovieApp/Components/UI/Loader/Loader";

import Pagination from "./ProjectMovieApp/Components/Layouts/Pagination/Pagination";

import MoviePage from "./ProjectMovieApp/Pages/MovieDetails/MovieDetails";

import PersonDetails from "./ProjectMovieApp/Pages/PersonDetails/PersonDetails";

import MovieDetailsProvider from "./ProjectMovieApp/Context/MovieDetailsContext";

import {PersonDetailsProvider} from "./ProjectMovieApp/Context/PersonDetailsContext";

import {MovieContext} from "./ProjectMovieApp/Context/movieContext";

import MyList from "./ProjectMovieApp/Pages/MyList/MyList";

/* AUTH */
import Login from "./ProjectMovieApp/Pages/Login/Login";

import Signup from "./ProjectMovieApp/Pages/Signup/Signup";

import ProtectedRoute from "./ProjectMovieApp/Routes/ProtectedRoute";

import "./App.css";

const Home = lazy(() =>
  import("./ProjectMovieApp/Pages/Home/Home")
);

const Tvshow = lazy(() =>
  import("./ProjectMovieApp/Pages/TvShows/TvShows")
);

const TrendingMovies = lazy(() =>
  import("./ProjectMovieApp/Pages/TrendingMovies/TrendingMovies")
);

const App = () => {

  const {
    search,
    setSearch,
    popularMovies,
    tvshow,
    trendingMovies,
    loading,
    moviesPage,
    handleMoviesNext,
    handleMoviesPrev,
    tvPage,
    handleTvNext,
    handleTvPrev,
    trendingPage,
    handleTrendingNext,
    handleTrendingPrev
  } = useContext(MovieContext);

  return (

    <BrowserRouter>

      <Routes>

        {/* DEFAULT */}
        <Route
          path="/"
          element={
            <Navigate to="/signup" />
          }
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* HOME */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>

              <>
                <Navbar
                  search={search}
                  setSearch={setSearch}
                />

                <Suspense
                  fallback={<Loader />}
                >

                  {loading ? (
                    <Loader />
                  ) : (
                    <Home
                      popularMovies={
                        popularMovies
                      }
                    />
                  )}

                 <Pagination
                  page={moviesPage}
                  handleNext={handleMoviesNext}
                  handlePrev={handleMoviesPrev}
                 />
                </Suspense>

                <Footer />

              </>

            </ProtectedRoute>
          }
        />

        {/* TV SHOW */}
        <Route
          path="/tvshow"
          element={
            <ProtectedRoute>

              <>
                <Navbar
                  search={search}
                  setSearch={setSearch}
                />

                <Suspense
                  fallback={<Loader />}
                >

                  {loading ? (
                    <Loader />
                  ) : (
                    <Tvshow
                      popularMovies={tvshow}
                    />
                  )}

                 <Pagination
                    page={tvPage}
                    handleNext={handleTvNext}
                    handlePrev={handleTvPrev}
                  />
                </Suspense>

                <Footer />

              </>

            </ProtectedRoute>
          }
        />

        {/* TRENDING */}
        <Route
          path="/trendingMovies"
          element={
            <ProtectedRoute>

              <>
                <Navbar
                  search={search}
                  setSearch={setSearch}
                />

                <Suspense
                  fallback={<Loader />}
                >

                  {loading ? (
                    <Loader />
                  ) : (
                    <TrendingMovies
                      popularMovies={
                        trendingMovies
                      }
                    />
                  )}

                  <Pagination
                     page={trendingPage}
                     handleNext={handleTrendingNext}
                     handlePrev={handleTrendingPrev}
                  />
                </Suspense>

                <Footer />

              </>

            </ProtectedRoute>
          }
        />

        {/* MY LIST */}
        <Route
          path="/mylist"
          element={
            <ProtectedRoute>

              <>
                <Navbar
                  search={search}
                  setSearch={setSearch}
                />

                <MyList />

                <Footer />

              </>

            </ProtectedRoute>
          }
        />

        {/* MOVIE DETAILS */}
        <Route
          path="/movie/:id"
          element={
            <ProtectedRoute>

              <>
                <Navbar
                  search={search}
                  setSearch={setSearch}
                />

                <MovieDetailsProvider>

                  <MoviePage />

                </MovieDetailsProvider>

                <Footer />

              </>

            </ProtectedRoute>
          }
        />

        {/* PERSON DETAILS */}
        <Route
          path="/person/:id"
          element={
            <ProtectedRoute>

              <>
                <Navbar
                  search={search}
                  setSearch={setSearch}
                />

                <PersonDetailsProvider>

                  <PersonDetails />

                </PersonDetailsProvider>

                <Footer />

              </>

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;