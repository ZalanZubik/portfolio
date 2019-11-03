import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    Sorry, the page you were looking for cannot be found.
    <Link to="/">return to home</Link>
    </>
  )
}

export default ErrorPage;