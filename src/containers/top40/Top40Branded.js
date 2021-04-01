import React,{useState,useEffect} from 'react'


const Top40Branded=({brand})=>{

  const [brands,setBrands]=useState([]);


    function fetchfunction(brand){
    const url=`https://product-fetch-toolstop.herokuapp.com/top40/${brand}`;
    fetch(url)
    .then(data=>data.json())
    .then((data)=>setBrands(data))
  }

  useEffect(()=>{
    fetchfunction(brand)
  })



  return(
    <div>
    The passed in brand for the fetch is {brand}
    </div>
  )
}

export default Top40Branded;
