import React, {useEffect} from 'react'
import Movies from '../Movies/Movies'
import movieapi from'../../common/Api/MovieApi';
import { ApiKey } from '../../common/Api/ApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/MovieSlice';
function Home() {

  const title = 'die'
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchMovie = async()=>{
      const response = await movieapi
      .get(`?apiKey=${ApiKey}&s=${title}`)
      .catch((error)=>{
        console.log("Error: ",error);
      });
      console.log("Response: ",response);
      dispatch(addMovies(response.data))
    };
    
    fetchMovie();
  },[]);

  return (
    <div className='home'>
      <div className='baner'>
        <Movies/>
      </div>
    </div>
  )
}

export default Home