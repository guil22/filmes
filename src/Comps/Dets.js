//import App from "../App";
import React from 'react';
import './comp.css'
import { useEffect, useState } from 'react';
import {
  useParams
} from "react-router-dom";

const {REACT_APP_API_KEY} = process.env


const Dets = () => {
    const param = useParams();
    const id1 = param.id
    

    const [det, setDet] = useState([]);
    console.log(param)

  useEffect(() => {
    const url1 = `https://api.themoviedb.org/3/movie/${id1}?api_key=${REACT_APP_API_KEY}&language=pt-BR`
    
    fetch(url1)
    .then(res => res.json())
    .then(data1 => setDet(data1))
    
    
  }, [id1])
 
  //console.log(det) 
  


    return (  
        <div>
        {/*  <p>id:</p><div className='idfilme'>  {JSON.stringify(id1)} </div> */}
            
        {/*  <p>Detalhes:</p>  */}<div className='detalhes'> {JSON.stringify(det.overview)} </div>
        </div>
    );
}
 
export default Dets;