import React,{useState,useEffect} from 'react';
import ErrorPage from "../errors/ErrorPage";


const Top40Branded=({brand})=>{

  const [brands,setBrands]=useState([]);
  const [error,setError]=useState(false);


    function fetchfunction(brand){
    const url=`https://product-fetch-toolstop.herokuapp.com/top40/${brand}`;
    fetch(url)
    .then(data=>data.json())
    .then((data)=>setBrands(data))
    .catch((err)=>setError(true))
  }

  useEffect(()=>{
    fetchfunction(brand)
  },[])




  if (brands.length===0){
    return(<p>...Loading</p>)
  }


    return(
      <h1>The passed in brand for the fetch is {brand}</h1>
    )



}
export default Top40Branded;
