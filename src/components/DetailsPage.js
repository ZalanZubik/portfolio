import React from 'react';
import { ProjectContext } from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

    const [thumbnail, ...detailsImages] = images;

    return (
      <DetailsContainer>
        <h1 className="project-title">{name}</h1>
        <div className="project-grid">
          <div className="grid-left">
            <img src={thumbnail} alt="Project" className="project-image" />
            <div className="button-container">
              <a className="grid-left-button" href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">website</a>
              <a className="grid-left-button" href="https://github.com/ZalanZubik" target="_blank" rel="noopener noreferrer">source code</a>
            </div>
          </div>
          <div className="grid-right">
            <ul>
              {skills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p className="about">About</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="project-images">
          {detailsImages.map((image, index) => <img src={image} key={index} alt={name} className="project-image" />)}
        </div>
      </DetailsContainer>
    )
  }
}

export default DetailsPage;

const DetailsContainer = styled.div`
  min-height: calc(100vh - 4rem - 3.7rem);
  width: 60vw;
  margin: auto;
  padding-top: 2.5rem;

  .project-title {
    text-align: center;
    font-family: 'Black Ops One', cursive;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 2rem;
  }

  .project-grid {
    display: grid;
    grid-gap: 2rem;
    grid-template-areas: 'grid-left grid-right';
  }

  .grid-left {
    grid-area: grid-left;
    width: 30vw;
  }

  .grid-right {
    grid-area: grid-right;
    width: 30vw;
  }

  .button-container {
    display: flex;
    justify-content: space-around;
  }

  .grid-left-button {
    color: var(--darkestBlue);
    border: 2px solid var(--darkestBlue);
    padding: 0.6rem 1.3rem;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Black Ops One', cursive;
    letter-spacing: 1px;
    font-size: 1.1rem;
    border-radius: 6px;
    display: inline-block;
  }

  .project-image {
    width: 100%;
  }

  .about {
    text-transform: uppercase;
    font-family: 'Black Ops One', cursive;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap
  }

  li {
    border: 1px solid black;
    padding: 0.2rem 0.7rem;
    font-family: 'Black Ops One', cursive;
    text-transform: uppercase;
    margin-right: 1rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .project-images {
    margin-top: 4rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  /* Media Queries */
  
`;