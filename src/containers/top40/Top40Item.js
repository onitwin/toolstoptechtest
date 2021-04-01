import React from 'react'


const Top40Item=({brand})=>{

  const newSrc=`./top-20-logos-${brand}-1.webp`
  const url= `/${brand}`

  return(
    <div>
   <a href={url}>
    <img className="top-40-brand" src={newSrc} alt={brand}/>
    </a>
    </div>

  )
}
export default Top40Item;
