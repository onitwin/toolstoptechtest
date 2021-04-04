import React from 'react'



//CHILD OF <Top40Branded>
//individual instance of a given product


const BrandedItem=({item})=>{
  const srcUrl=item.images[0].url_thumbnail;
  const toolstopUrl=`http://toolstop.co.uk${item.custom_url.url}`

  return (
    <li className="branded-item-wrap">
    <a href={toolstopUrl}>
    <article className="item-body">
    <img className="item-image" src={srcUrl} alt={item.name}/>
    <div className="item-name-wrap">
    <span className="item-name-label">{item.name}</span>
    </div>
    <h1 className="vat-label">£{(item.price*1.20).toFixed(2)}</h1>
    <p className="ex-vat-label">£{item.price} Ex VAT</p>
    </article>
    </a>


    </li>
  )

}

export default BrandedItem;
