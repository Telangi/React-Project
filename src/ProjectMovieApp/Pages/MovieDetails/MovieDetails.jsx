import React, { useEffect } from 'react'

import { useNavigate, Link } from 'react-router-dom'

import Button from '../../Components/UI/Button/Button'

import Modal from '../../Components/UI/Modal/Modal'

import useModal from '../../hooks/useModal'

import Youtube from 'react-youtube'

import { useMovieDetails } from '../../Context/MovieDetailsContext'

import { formatDateToDDMMYYYY } from '../../utils/formatdate'

import { fetchMovieCast, addToMyList } from '../../api/axios'

import './MovieDetails.scss'

const MovieDetailsContent = () => {

  const navigate = useNavigate()

  const { movie, trailer, loading } = useMovieDetails()

  const { isOpen, handleOpen, handleClose } = useModal()

  const [cast, setCast] = React.useState([])

  const id = movie?.id

  useEffect(() => {

    if (!id) return

    fetchMovieCast(id)
      .then(data => {
        setCast(data.cast)
      })
      .catch(error => {
        console.log(error)
      })

  }, [id])

  if (loading) return <p>Loading...</p>

  return (

    <div className='movie-details'>

      <h1 className='movie-title'>
        {movie.original_title}
      </h1>

      <img
        className='movie-image'
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.original_title}
      />

      <p className='movie-overview'>
        {movie.overview}
      </p>

      <p className='movie-release'>
        Release Date:
        {formatDateToDDMMYYYY(movie.release_date)}
      </p>

      <p className='movie-rating'>
        Rating:
        {movie.vote_average}
      </p>

      <Button
        onClick={() => navigate('/')}
        title={'Back'}
      />

      <Button
        title={'Watch Trailer'}
        onClick={handleOpen}
      />

    <button
      className="mylist-btn"
      onClick={() => {
      const result = addToMyList(movie);

      if (result === "exists") {
      alert("Already in My List ❤️")
     } else {
      alert("Movie Added To My List ❤️")
    }
  }}
>
  ❤️ Add To My List
   </button>

      <Modal
        title={'Trailer'}
        isOpen={isOpen}
        onClose={handleClose}
      >
        {trailer && (
          <Youtube videoId={trailer.key} />
        )}
      </Modal>

      {/* CAST SECTION */}
      <div className='cast-list'>

        {cast.slice(0, 8).map((item) => {

          return (

            <Link
              to={`/person/${item.id}`}
              key={item.id}
              className='cast-item'
            >

              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
                className='cast-image'
              />

              <h3>{item.name}</h3>

              <p>{item.character}</p>

            </Link>
          )
        })}

      </div>

    </div>
  )
}

export default MovieDetailsContent