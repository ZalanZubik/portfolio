import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Project = ({ project }) => {
  const { name, images, slug } = project;
  return (
    <ProjectContainer>
      <h2>{name}</h2>
      <div className="img-container">
        <img src={images[0]} alt="project thumbnail" />
        <Link to={`/projects/${slug}`} className="project-link">Details</Link>
      </div>
     
    </ProjectContainer>
  )
}

export default Project;

const ProjectContainer = styled.article`
  margin-top: 2rem;
  border: 3px solid black;

  h2 {
    background-color: grey;
    border-bottom: 3px solid black;
  }

  .img-container {
    position: relative;
  }
  
  .img-container img {
    width: 100%;
    display: block;
  }

  .img-container:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .img-container:hover img {
    opacity: 0.3;
  }

  .project-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    text-decoration: none;
    border: 1px solid black;
    padding: 0.6rem 2.4rem;
    color: var(--mainWhite);
  }

  .img-container:hover .project-link {
    transform: translate(-50%, -50%) scale(1);
  }
`;