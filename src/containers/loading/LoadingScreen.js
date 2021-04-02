import React from 'react';
import "./loadingstyle.scss";



const LoadingScreen=()=>{

  return(
    <div className="loading-animation">
    <img className="sawblade-animation" src='./sawblade.png'/>
    <h1>...Loading...</h1>
    </div>
  )
}
export default LoadingScreen;
