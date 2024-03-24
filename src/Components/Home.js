import React, { useEffect } from 'react'
import MovieListing from './MovieListing';
import MovieAPI from '../MovieAPI';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncThunk } from '../features/movies/movieSlice';
import { addCart, removeCart, InputOnchange } from '../features/cart/cartSlice';
import TextArea from '../common/Elements';
import {ButtonArea} from '../common/Elements';
import { useFormik } from 'formik';

const Home = () => {
    const dispatch = useDispatch();
    // const InputValue = useSelector((state)=> state.carttest.LoginPayload);
    // //Counter Func
    // const carts = useSelector((state)=> state.carttest.cartState);
    // const Addhandle = (e)=>{
    //   dispatch(addCart());
    // }
    // const Removehandle = ()=>{
    //   dispatch(removeCart());
    // }

    // const handleInputChange = (e) =>{
    //   const {name, value} = e.target;
    //   dispatch(InputOnchange({...InputValue, [name]: value}))
    // }
    // const HandleSubmit =(e)=>{
    //   e.preventDefault();
    //   console.log("InputValue", InputValue);
    //   dispatch(InputOnchange({username: "", password:""}))
    // }
    // const formik = useFormik({
    //   initialValues:{
    //     username: "",
    //     password:""
    //   },
    //   onSubmit: (values)=>{
    //     console.log(values);
    //   }
    // })
  return (
    <div>
        <MovieListing />
    </div>
  )
}

export default Home