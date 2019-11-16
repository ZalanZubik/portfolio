import React from 'react';
import { ProjectContext } from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdEye } from 'react-icons/io';
import { FaCode } from 'react-icons/fa';

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }

  static contextType = ProjectContext;

  render() {
    const { getProject, openModal } = this.context;
    const project = getProject(this.state.slug);
    
    if (!project) {
      return (
        <NoProjectsContainer>
          <div className="project-not-found">
            <h1>No such project could be found.</h1>
            <Link to="/projects" className="back-button">Back to projects</Link>
          </div>
        </NoProjectsContainer>
      )
    }

    const { name, description, images, skills, codeUrl, presentationUrl } = project;

    const [thumbnail, mainImage, ...detailsImages] = images;

    return (
      <>
        <DetailsContainer>
          <h1 className="project-title">{name}</h1>
          <div className="project-grid">
            <div className="grid-left">
              <img src={mainImage} alt="Project" className="project-image" />
              <div className="button-container">
                {presentationUrl ? <a className="grid-left-button" href={presentationUrl} target="_blank" rel="noopener noreferrer"><IoMdEye className="button-icon" /> view</a> : ""}
                {codeUrl ? <a className="grid-left-button" href={codeUrl} target="_blank" rel="noopener noreferrer"><FaCode className="button-icon" /> code</a> : ""}
              </div>
            </div>
            <div className="grid-right">
              <ul>
                {skills.map((skill, index) => <li key={index}>{skill}</li>)}
              </ul>
              <p className="about">About</p>
              <p className="description">{description}</p>
            </div>
          </div>
          <div className="project-images">
            {detailsImages.map((image, index) => <img src={image} key={index} alt="project content" onClick={() => openModal(image)} className="project-image" />)}
          </div>
        </DetailsContainer>
      </>
    )
  }
}

export default DetailsPage;

const DetailsContainer = styled.div`
  min-height: calc(100vh - 3.7rem);
  width: 65vw;
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
  }

  .grid-right {
    grid-area: grid-right;
  }

  .button-container {
    text-align: center;
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
    margin-top: 1.5rem;
    transition: color 350ms ease-out, border 350ms ease-out;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  .grid-left-button:hover {
    color: var(--hoverColor);
    border: 2px solid var(--hoverColor);
  }

  .button-icon {
    font-size: 1.5rem;
    vertical-align: middle;
  }

  .about {
    text-transform: uppercase;
    font-family: 'Black Ops One', cursive;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .description {
    white-space: pre-line;
    text-align: justify;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    border: 2px solid var(--darkestBlue);
    padding: 0.2rem 0.7rem;
    font-family: 'Black Ops One', cursive;
    text-transform: uppercase;
    margin-right: 1rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .project-images { 
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: grid;
    grid-gap: 1.2rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .project-image {
    width: 100%;
    -webkit-box-shadow: 8px 8px 19px -3px rgba(36,36,36,0.79);
    -moz-box-shadow: 8px 8px 19px -3px rgba(36,36,36,0.79);
    box-shadow: 8px 8px 19px -3px rgba(36,36,36,0.79);
  }

  .project-images img {
    cursor: pointer;
  }

  /* Media Queries */
  
`;

const NoProjectsContainer = styled.div`
  min-height: calc(100vh - 4rem - 3.7rem);
  display: flex;
  padding-bottom: 10rem;
  align-items: center;
  justify-content: center;

  .project-not-found {
    text-align: center;
    color: var(--darkestBlue);
    display: inline-block;
    padding: 2rem;
    padding-top: 1rem;
  }

  h1 {
    padding-bottom: 2.5rem;
  }

  .back-button {
    padding: 0.7rem 1rem;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Black Ops One', cursive;
    color: var(--darkestBlue);
    border: 2px solid var(--darkestBlue);
    border-radius: 5px;
    transition: color 350ms ease-out, border 350ms ease-out;
  }

  .back-button:hover {
    color: var(--hoverColor);
    border: 2px solid var(--hoverColor);
  }
`;