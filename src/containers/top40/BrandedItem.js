import React from 'react'




const BrandedItem=({item})=>{
  console.log(item.name)
  const srcUrl=item.images[0].url_thumbnail;
  const toolstopUrl=`http://toolstop.co.uk${item.custom_url.url}`
  console.log(toolstopUrl);

  return (
    <li className="branded-item-wrap">
    <a href={toolstopUrl}>
    <article className="item-body">
    <img className="item-image" src={srcUrl}/>
    {item.name}
    <h1 className="vat-label">£{(item.price*1.20).toFixed(2)}</h1>
    <p className="ex-vat-label">£{item.price} Ex VAT</p>
    </article>
    </a>


    </li>
  )

}

export default BrandedItem;