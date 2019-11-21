import React from 'react';
import styled from 'styled-components';
import { ProjectContext } from '../context';
import Project from './Project';
import { Link } from 'react-router-dom';

class Highlighted extends React.Component {
  static contextType = ProjectContext;

  render() {
    let { highlightedProjects } = this.context;

    return (
      <HighlightedContainer>
        <h1 id="highlighted">Highlighted Projects</h1>
        <div className="highlighted-projects">
          {highlightedProjects.map(project => <Project key={project.id} project={project} />)}
        </div>
        <Link to="/projects" className="all-projects-button">See more</Link>
      </HighlightedContainer>
    )
  }
}

export default Highlighted;

const HighlightedContainer = styled.section`
  text-align: center;
  padding: 4.5rem 0 3.5rem 0;
  background: var(--backgroundColor);

  h1 {
    padding-bottom: 1.4rem;
    font-family: 'Black Ops One', cursive;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 2em;
  }

  .highlighted-projects {
    width: 95vw;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 2.5rem;
    padding-top: 2.5rem;
    margin: 0 auto;
  }

  .all-projects-button {
    display: inline-block;
    margin-top: 3.5rem;
    padding: 1rem 1.3rem;
    border: 2px solid var(--darkestBlue);
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Black Ops One', cursive;
    letter-spacing: 1px;
    font-size: 1.1rem;
    color: var(--darkestBlue);
    border-radius: 6px;
    transition: border 450ms ease-out, color 450ms ease-out;
  }

  /* Media Queries */

  @media screen and (max-width: 1206px) {
    .highlighted-projects {
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  }

  @media screen and (max-width: 788px) {
    .highlighted-projects {
      width: 83vw;
      grid-template-columns: 1fr;
      grid-gap: 3rem;
      padding-top: 1.4rem;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 3rem 0;

    h1 {
      font-size: 2rem;
    }
    .highlighted-projects {
      padding-top: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    .all-projects-button:hover {
      border: 2px solid var(--hoverColor);
      color: var(--hoverColor);
    }
  }
`;