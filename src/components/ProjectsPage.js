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
      <h1>Projects</h1>
      <div className="projects">
        {projects}
      </div>
    </ProjectsContainer>
    )
  }
}

export default ProjectsPage;

const ProjectsContainer = styled.section`
  min-height: calc(100vh - 3.7rem - 4rem);
  text-align: center;
  padding: 2.5rem;
  background-color: lightblue;

  .projects {
    width: 95vw;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    margin: 0 auto;
  }
`;