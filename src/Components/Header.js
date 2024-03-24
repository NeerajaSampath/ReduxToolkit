import { Grid } from '@mui/material'
import React from 'react'
import { ButtonArea } from '../common/Elements'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { LogOutFunction } from '../features/cart/cartSlice';

const Header = () => {
  const navigate = useNavigate();
  const selector = useSelector((state)=> state.carttest.LoginPayload);
  const dispatch = useDispatch();
  console.log("selector from header", selector);
  const RedirectHandle = ()=>{
    if(selector?.IsAuth){
      navigate("/");
      dispatch(LogOutFunction({username:"", password: ""}));
    } else{
      navigate("/register");
    }
  }
  return (
    <div style={{display: "flex", alignItems:"center", justifyContent:"space-between", boxShadow:"9px 9px 9px #ccc", padding: "0 20px"}}>
        <h5>Ecom</h5>
        <div>
          <span>{selector?.username}</span>
        <ButtonArea type="button" value={selector?.IsAuth ? "Logout" :"Sign In"} variant="contained" size="sx" onClick={RedirectHandle} />
        </div>
    </div>
  )
}

export default Header