import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  const { name, images, slug } = project;
  return (
    <article>
      <div>
        <img src={images[0]} alt="project thumbnail" />
      </div>
      <Link to={`/projects/${slug}`}>Details</Link>
      <p>{name}</p>
    </article>
  )
}

export default Project;