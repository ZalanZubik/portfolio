import React from 'react';
import { ProjectContext } from '../context';
import Project from './Project';
import styled from 'styled-components';

class ProjectsPage extends React.Component {
  static contextType = ProjectContext;

  render() {
    let { projects } = this.context;
    projects = projects.map(project => {
      return <Project key={project.id} project={project} />
    });

    return (
      <ProjectsContainer>
      <h1 className="projects-title">Projects</h1>
      <div className="projects">
        {projects}
      </div>
    </ProjectsContainer>
    )
  }
}

export default ProjectsPage;

const ProjectsContainer = styled.section`
  background: var(--backgroundColor);
  min-height: calc(100vh - 3.7rem - 4rem);
  text-align: center;
  padding-bottom: 5rem;

  .projects-title {
    text-align: center;
    font-family: 'Black Ops One', cursive;
    text-transform: uppercase;
    letter-spacing: 3px;
    padding-top: 2.5rem;
    padding-bottom: 1rem;
    font-size: 3rem;
  }

  .projects {
    max-width: 1100px;
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 3rem;
    margin: 0 auto;
    padding-top: 2rem;
  }

  /* Media Queries */
  
  @media screen and (max-width: 830px) {
    .projects-title {
      font-size: 2.5rem;
    }
    
    .projects {
      width: 83vw;
      grid-template-columns: 1fr;
    }
  }
`;