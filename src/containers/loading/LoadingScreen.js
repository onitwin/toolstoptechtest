import React from 'react';
import "./loadingstyle.scss";


//renders while API is fetching
const LoadingScreen=()=>{

  return(
    <div className="loading-animation">
    <img className="sawblade-animation" src='./sawblade.png' alt='loading-animation'/>
    <h1>...Loading...</h1>
    </div>
  )
}
export default LoadingScreen;
