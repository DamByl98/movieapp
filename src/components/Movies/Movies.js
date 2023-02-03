import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/MovieSlice'
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css'
function Movies() {
  const movies = useSelector(getAllMovies);
  let renderMovies="";

  renderMovies = 
  movies.Response === "True" ? (
    movies.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}/>
    ))
  ):
  (
    <div className='error'>
    <h3>{movies.Error}</h3>
    </div>
  );
  return (
    <div className='movie-wrapper'>
      <div className='card'>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  )
}

export default Movies