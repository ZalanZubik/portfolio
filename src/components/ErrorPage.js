import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ErrorImg from '../images/ErrorImg.jpg';

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <div className="error-card">
        <h1>404</h1>
        <h2>The page you were looking for cannot be found.</h2>
        <Link className="error-button" to="/">return to home</Link>
      </div>
    </ErrorContainer>
  )
}

export default ErrorPage;

const ErrorContainer = styled.div`
  min-height: calc(100vh - 4rem - 3.7rem);
  display: flex;
  padding-bottom: 10rem;
  align-items: center;
  justify-content: center;
  background: url(${ErrorImg}) center/cover no-repeat;

  .error-card {
    width: 50vh;
    text-align: center;
    color: var(--mainWhite);
    display: inline-block;
    background-color: rgba(0,0,0,0.6);
    padding: 2rem;
    padding-top: 1rem;
  }

  h1 {
    font-size: 4em;
  }

  h2 {
    padding-bottom: 2.5rem;
  }

  .error-button {
    padding: 0.7rem 1rem;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Black Ops One', cursive;
    color: var(--mainWhite);
    border: 2px solid var(--mainWhite);
    border-radius: 5px;
    transition: color 350ms ease-out, border 350ms ease-out;
  }

  .error-button:hover {
    color: var(--hoverColor);
    border: 2px solid var(--hoverColor);
  }

`;