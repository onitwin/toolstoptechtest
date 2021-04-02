import React from 'react';
import './maincontainerstyle.scss'
// import PageHeader from "../header/PageHeader";
import Top40Container from "../top40/Top40Container"
import ToolstopFooter from "../footer/ToolstopFooter";



const MainContainer=()=>{


  return(
    <div>
    <Top40Container/>
    <ToolstopFooter/>
    </div>
  )
}

export default MainContainer;
