import React from 'react'
import './errorpagestyle.scss';



const ErrorPage=()=>{

  return (
    <div className="error-container">
    <h1>This result has returned an error</h1>
    <a href="/"><h2>Return to homepage</h2></a>
    </div>

  )
}
export default ErrorPage;
