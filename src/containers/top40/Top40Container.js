import React from 'react';
import './top40Style.scss';
import Top40Header from './Top40Header.js';
import Top40Grid from './Top40Grid';


const Top40Container=()=>{

  return(
    <div className="top-40-outer">
    <Top40Header/>
    <Top40Grid/>
    </div>
  )
}

export default Top40Container;
