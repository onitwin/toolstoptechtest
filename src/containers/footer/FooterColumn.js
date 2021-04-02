import React from 'react'



const FooterColumn=({heading,text})=>{

  const textlist=text.map((t,index)=>{
    return(
      <div>
      <li className="footer-item">{t}</li>
      <br/>
      </div>
    )
  })


  return(
    <div className="footer-column-wrapper">
    <h4>{heading}</h4>
    {textlist}

    </div>

  )
}
export default FooterColumn;
