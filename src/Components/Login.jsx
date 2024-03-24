import React, { useEffect } from 'react'
import MovieListing from './MovieListing';
import MovieAPI from '../MovieAPI';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncThunk } from '../features/movies/movieSlice';
import { addCart, removeCart, InputOnchange } from '../features/cart/cartSlice';
import TextArea from '../common/Elements';
import {ButtonArea} from '../common/Elements';
import { useFormik } from 'formik';
import '../common/style.css'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const dispatch = useDispatch();
    const InputValue = useSelector((state)=> state.carttest.LoginPayload);
    const navigate = useNavigate();
    //Counter Func
    const carts = useSelector((state)=> state.carttest.cartState);
    const Addhandle = (e)=>{
      dispatch(addCart());
    }
    const Removehandle = ()=>{
      dispatch(removeCart());
    }

    const formik = useFormik({
      initialValues:{
        username: "",
        password:""
      },
      onSubmit: (values, actions)=>{
          try {
            // console.log(InputValue);
            dispatch(InputOnchange({username: values.username, password: values.password}));
            navigate("/home");
            actions.resetForm();
        } catch (error) {
            console.log("error", error);
        }
      }
    })
  return (
    <div>
        <form onSubmit={formik?.handleSubmit}>
            <div style={{display: "flex", alignItems:"center", justifyContent:"center", flexDirection: "column", height: "87vh"}}>
                <TextArea className="inputField" type="text" name="username" onChange={formik.handleChange} placeholder="Enter the Username" size="sx" variant="standard" />
                <TextArea className="inputField" type="password" name="password" onChange={formik.handleChange} placeholder="Enter the password" size="sx" variant="standard" />
                <ButtonArea type="submit" value="Submit" variant="contained" />
            </div>
        </form>
  </div>
  )
}

export default Login