import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <ErrorContainer>
      <h1>404</h1>
      <h2>The page you were looking for cannot be found.</h2>
      <Link className="error-button" to="/">return to home</Link>
      </ErrorContainer>
      
    </div>
  )
}

export default ErrorPage;

const ErrorContainer = styled.div`
  width: 50vh;
  text-align: center;
  color: var(--mainWhite);
  display: inline-block;
  background-color: rgba(0,0,0,0.6);
  padding: 2rem;
  padding-top: 1rem;

  h1 {
    font-size: 4em;
  }

  h2 {
    padding-bottom: 2.5rem;
  }

  .error-button {
    padding: 0.7rem 1.6rem;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--mainWhite);
    border: 2px solid var(--mainWhite);
    border-radius: 5px;
    transition: var(--mainTransition);
  }

  .error-button:hover {
    background-color: rgba(255,255,255,0.2);
  }

`;