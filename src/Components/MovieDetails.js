import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchAsyncThunkDetails} from "../features/movies/movieSlice";
import { useParams, useNavigate } from 'react-router-dom';
import { ButtonArea } from '../common/Elements';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const useselector = useSelector((state)=> state?.moviestest?.moviesState);
  let { productId } = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(fetchAsyncThunkDetails(productId));
  }, [dispatch]);
  const BackToHome = () =>{
    navigate(`/home`);
  }
  return (
    <div>
      <p>{useselector?.id}</p>
      <p>{useselector?.name}</p>
      <p>{useselector?.email}</p>
      <p>{useselector?.body}</p>
      <ButtonArea value="back" type="button" variant="contained" onClick={BackToHome} />
    </div>
  )
}

export default MovieDetails