import React from 'react';
import "./headerstyle.scss"
import {Link} from "react-router-dom"


const PageHeader=()=>{



  return(
    <div className="logo-container">
    <Link to="/"><img className="toolstop-logo" src="./toolstop-logo.svg" alt="toolstop logo"/></Link>
    </div>
  )
}

export default PageHeader;
