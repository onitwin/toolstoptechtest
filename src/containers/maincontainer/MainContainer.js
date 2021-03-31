import React from 'react';
import './maincontainerstyle.scss'
import PageHeader from "../header/PageHeader";
import Top40Container from "../top40/Top40Container"


const MainContainer=()=>{


  return(
    <div>
    <PageHeader/>
    <Top40Container/>
    </div>
  )
}

export default MainContainer;
