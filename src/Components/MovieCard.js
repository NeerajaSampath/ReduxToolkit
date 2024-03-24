import React from 'react';
import {useNavigate} from 'react-router-dom';

const MovieCard = ({data}) => {
  const navigate = useNavigate();
    const movieClick = (id)=>{
        console.log("id", id);
        navigate(`/product/${id.id}`);
    }
  return (
    <div style={{background:"#ccc", padding: "5px", cursor: "pointer", margin: "5px", display: "inline-block", width: "300px", flexWrap: "wrap"}} onClick={()=> movieClick(data)}>
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.body}</p>
    </div>
  )
}

export default MovieCard