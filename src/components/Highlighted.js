import React from 'react';
import styled from 'styled-components';
import { ProjectContext } from '../context';
import Project from './Project';
import { Link } from 'react-router-dom';

class Highlighted extends React.Component {
  static contextType = ProjectContext;

  render() {
    let { highlightedProjects } = this.context;
    highlightedProjects = highlightedProjects.map(project => {
      return <Project key={project.id} project={project} />
    });

    return (
      <HighlightedContainer>
        <h1>Highlighted Projects</h1>
        <div className="highlighted-projects">
          {highlightedProjects}
        </div>
        <Link to="/projects">all projects</Link>
      </HighlightedContainer>
    )
  }
}

export default Highlighted;

const HighlightedContainer = styled.section`
  text-align: center;
  padding: 2.5rem;
  background-color: lightblue;

  .highlighted-projects {
    width: 95vw;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    margin: 0 auto;
  }
`;