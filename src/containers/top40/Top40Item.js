import React from 'react'


const Top40Item=({brand})=>{

  const newSrc=`./top-20-logos-${brand}-1.webp`

  return(
    <div>
   <a href="www.placeholder.co.uk">
    <img className="top-40-brand" src={newSrc} alt={brand}/>
    </a>
    </div>

  )
}
export default Top40Item;
