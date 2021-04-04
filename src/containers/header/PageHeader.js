import React from 'react';
import "./headerstyle.scss"
import {Link} from "react-router-dom"

//CHILD OF <Top40Routes>
//rendered across all pages- placed within router to allow 'Link' React router class to work with logo as home button.
const PageHeader=()=>{



  return(
    <div className="logo-container">
    <Link to="/"><img className="toolstop-logo" src="./toolstop-logo.svg" alt="toolstop logo"/></Link>
    </div>
  )
}

export default PageHeader;
