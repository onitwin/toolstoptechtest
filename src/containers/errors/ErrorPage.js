import React from 'react'
import './errorpagestyle.scss';

//error page renders if no data pulled from API (after delay)
//or incorrect url entered

const ErrorPage=()=>{

  return (
    <div className="error-container">
    <h1>This result has returned an error</h1>
    <a href="/"><h2>Return to homepage</h2></a>
    </div>

  )
}
export default ErrorPage;
