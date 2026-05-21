import { StrictMode } from "react"

import { createRoot } from "react-dom/client"

import "./App.css"

import App from "./App.jsx"

import MovieContextProvider from "./ProjectMovieApp/Context/movieContext"

import {PersonDetailsProvider} from "./ProjectMovieApp/Context/PersonDetailsContext"

import AuthContextProvider from "./ProjectMovieApp/Context/AuthContext"

/* 👉 ADD THIS */
import {MyListContextProvider} from "./ProjectMovieApp/Context/MyListContext"

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <AuthContextProvider>

      <MovieContextProvider>

        <PersonDetailsProvider>

          {/* 👉 WRAPPED HERE */}
          <MyListContextProvider>

            <App />

          </MyListContextProvider>

        </PersonDetailsProvider>

      </MovieContextProvider>

    </AuthContextProvider>

  </StrictMode>
)