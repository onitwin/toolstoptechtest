import React from 'react';
import './maincontainerstyle.scss'
// import PageHeader from "../header/PageHeader";
import Top40Routes from "../top40/Top40Routes"
import ToolstopFooter from "../footer/ToolstopFooter";


//responsible for render of <Top40Routes> component and <ToolstopFooter> component
const MainContainer=()=>{


  return(
    <div>
    <Top40Routes/>
    <ToolstopFooter/>
    </div>
  )
}

export default MainContainer;
