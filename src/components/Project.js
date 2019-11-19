import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Project = ({ project }) => {
  const { images, slug } = project;
  return (
    <ProjectContainer>
      <Link to={`/projects/${slug}`} className="project-link">
        <img src={images[0]} alt="project thumbnail" className="project-thumbnail" />
        <div className="details-label">Details</div>
      </Link>
    </ProjectContainer>
  )
}

export default Project;

const ProjectContainer = styled.article`
  background-color: #000;
  position: relative;
  -webkit-box-shadow: 8px 8px 19px -3px rgba(36,36,36,0.79);
  -moz-box-shadow: 8px 8px 19px -3px rgba(36,36,36,0.79);
  box-shadow: 8px 8px 19px -3px rgba(36,36,36,0.79);
  overflow: hidden;

  .project-thumbnail {
    width: 100%;
    display: block;
    transition: opacity 550ms ease-in, transform 550ms ease-in;
  }

  .details-label {
    position: absolute;
    top: 50%;
    left: 50%;
    text-decoration: none;
    transform: translate(-50%, -50%);
    border: 2px solid var(--mainWhite);
    padding: 0.4rem 1.5rem;
    color: var(--mainWhite);
    border-radius: 7px;
    font-weight: 600;
    opacity: 0;
    transition: opacity 550ms ease-in;
  }

  &:hover .details-label {
    opacity: 0.9;
  }

  &:hover .project-thumbnail {
    opacity: 0.5;
    transform: scale(1.03);
  }
`;