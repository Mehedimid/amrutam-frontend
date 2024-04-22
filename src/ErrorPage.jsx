import React from 'react'
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page" className='text-center md:my-32'>
        <h1>Oops!</h1>
        <p className='text-3xl my-2'>Sorry, an unexpected error has occurred.</p>
        <p>
          <i className='font-bold'>{error.statusText || error.message}</i>
        </p>
      </div>
    );
}

export default ErrorPage