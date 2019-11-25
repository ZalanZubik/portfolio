import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Project = ({ project }) => {
  const { images, slug } = project;
  return (
    <ProjectContainer>
      <Link to={`/projects/${slug}`} className="project-link">
        <img src={images[0]} alt="project thumbnail" className="project-thumbnail" />
      </Link>
    </ProjectContainer>
  )
}

export default Project;

const ProjectContainer = styled.article`
  -webkit-box-shadow: 8px 8px 19px -3px rgba(36,36,36,0.79);
  -moz-box-shadow: 8px 8px 19px -3px rgba(36,36,36,0.79);
  box-shadow: 8px 8px 19px -3px rgba(36,36,36,0.79);
  overflow: hidden;

  .project-thumbnail {
    width: 100%;
    display: block;
  }

  /* Media Queries */

  @media screen and (min-width: 768px) {
    .project-thumbnail {
      transition: transform 500ms ease-in;
    }

    &:hover .project-thumbnail {
      transform: scale(1.07);
    }
  }
`;