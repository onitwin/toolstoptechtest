import React from 'react';
import "./top40Style.scss"
import Top40Item from "./Top40Item";

const Top40Grid=()=>{

  const brandlist=[{brandName:"makita"},{brandName:"dewalt"},{brandName:"hikoki"},
{brandName:"bosch"},{brandName:"bahco"},{brandName:"metabo"},{brandName:"stanley"},
{brandName:"evolution"}]; //added array as very quick and easy to add and renmove new products

const brandrender=brandlist.map((item,index)=>{
  return <Top40Item key={index} brand={item.brandName}/>
})

  return(
  <div className="top-40-all">
  <div className="top-40-banner-wrap">
  <a href="placeholder.co.uk">
  <img className="banner-image" src="./top-40-banner.webp" alt="top-40"/>
  </a>
  </div>
  {brandrender}

  </div>
)

}

export default Top40Grid;
