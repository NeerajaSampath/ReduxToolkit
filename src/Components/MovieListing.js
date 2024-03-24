import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getAllMovies, fetchAsyncThunk} from "../features/movies/movieSlice"
import MovieCard from './MovieCard';
import axios from "axios"

const MovieListing = () => {
    const movies = useSelector((state)=> state?.moviestest?.moviesState);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchAsyncThunk());
    }, [dispatch]);
  return (
    <div>{movies == undefined ? "loading" : movies.map((item)=>(
            <MovieCard data={item} key={item?.id} />
    ))}</div>
  )
}

export default MovieListing