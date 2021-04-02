import React,{useState,useEffect} from 'react';
import ErrorPage from "../errors/ErrorPage";
import BrandedItem from './BrandedItem';
import LoadingScreen from '../loading/LoadingScreen'


const Top40Branded=({brand})=>{

  const [brands,setBrands]=useState([]);
  const [error,setError]=useState(false);

  const itemsList=brands.map((item)=>{
    console.log(item)
    return <BrandedItem key={item.id} item={item}/>
  })


    function fetchfunction(brand){
    const url=`https://product-fetch-toolstop.herokuapp.com/top40/${brand}`;
    fetch(url)
    .then(data=>data.json())
    .then((data)=>setBrands(data.data))
    .catch((err)=>setError(true))
  }

  useEffect(()=>{
    fetchfunction(brand)
  },[])




  if (brands.length===0){
    return(<LoadingScreen/>)
  }


    return(
      <ul className="branded-items-container">
      {itemsList}
      </ul>
    )


}
export default Top40Branded;
