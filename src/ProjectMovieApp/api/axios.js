import axios from 'axios';
const baseUrl ='https://api.themoviedb.org/3';
const api_key ='6fd809fec2ff7c429a0e2258cb6fc451'

async function fetchPopularMovies(page=1){
    const response =await axios.get(`${baseUrl}/movie/popular`,{
        params:{
            api_key:api_key,
            page:page
        }
    });
    return response.data.results;
}
async function fetchTvShows(page=1){
    const response =await axios.get(`${baseUrl}/tv/popular`,{
        params:{
            api_key:api_key,
            page:page
        }
    });
    return response.data.results;
}
async function fetchTrendingMovies(page=1){
    const response =await axios.get(`${baseUrl}/trending/movie/week`,{
        params:{
            api_key:api_key,
            page:page
        }
    })
    return response.data.results
}
async function fetchSearchMovies(query,page=1){
    const response =await axios.get(`${baseUrl}/search/movie`,{
        params:{
            api_key:api_key,
            page:page,
            query:query
            
        }
    })
    return  response.data.results
}
async function fetchMovieDetails(movieId) {
  const response = await axios.get(
    `${baseUrl}/movie/${movieId}`,
    {
      params: {
        api_key: api_key,
      },
    }
  );

  return response.data;
}
async function fetchMovieTrailer(movieId) {
  const response = await axios.get(
    `${baseUrl}/movie/${movieId}/videos`,
    {
      params: {
        api_key: api_key,
      },
    }
  );

  return response.data;
}
async function fetchMovieCast(movieId){
	const response = await axios.get(`${baseUrl}/movie/${movieId}/credits`,{
		params : {
			api_key: api_key,
			}
		})
	return response.data;
}
async function fetchPersonDetails(personId) {
  const response = await axios.get(`${baseUrl}/person/${personId}`,
    {
      params: {
        api_key: api_key,
      },
    }
  );

  return response.data;
}
async function fetchPersonMovies(personId) {
  const response = await axios.get(`${baseUrl}/person/${personId}/movie_credits`,
    {
      params: {
        api_key: api_key,
      },
    }
  );

  return response.data;
}
async function fetchPersonImages(personId) {
  const response = await axios.get(
    `${baseUrl}/person/${personId}/images`,
    {
      params: {
        api_key: api_key,
      },
    }
  );

  return response.data;
}
function addToMyList(movie) {
  const existingMovies =
    JSON.parse(localStorage.getItem("myList")) || [];

  const alreadyExists = existingMovies.find(
    (item) => item.id === movie.id
  );

  if (alreadyExists) {
    return "exists";
  }

  existingMovies.push(movie);

  localStorage.setItem(
    "myList",
    JSON.stringify(existingMovies)
  );

  return "added";
}
function fetchMyList() {
  return JSON.parse(localStorage.getItem("myList")) || [];
}
function removeFromMyList(movieId) {
  const existingMovies =
    JSON.parse(localStorage.getItem("myList")) || [];

  const updatedMovies = existingMovies.filter(
    (movie) => movie.id !== movieId
  );

  localStorage.setItem(
    "myList",
    JSON.stringify(updatedMovies)
  );
}
export {
  fetchPopularMovies,
  fetchTvShows,
  fetchSearchMovies,
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieTrailer,
  fetchMovieCast,
  fetchPersonDetails,
  fetchPersonMovies,
  fetchPersonImages,
  addToMyList,
  fetchMyList,
  removeFromMyList
};
