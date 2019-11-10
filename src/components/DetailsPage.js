import React from 'react';
import { ProjectContext } from '../context';
import { Link } from 'react-router-dom';

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug
    };
  }

  static contextType = ProjectContext;

  render() {
    const { getProject } = this.context;
    const project = getProject(this.state.slug);
    
    if (!project) {
      return (
        <div>
          <h3>No such project could be found...</h3>
          <Link to="/projects">Return to projects</Link>
        </div>
      )
    }

    const { name, description, images, skills } = project;

    return (
      <div>
        <h1>{name}</h1>
        <img src={images[0]} alt="Project Thumbnail" />
        <p>{description}</p>
        <ul>
          {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
      </div>
    )
  }
}

export default DetailsPage;