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
      <DetailsContainer>
        <div className="project-container">
          <h1 className="project-title">{name}</h1>
          <div className="project-grid">
            <div className="grid-left">
              <img src={mainImage} alt="Project" className="project-image" />
              
            </div>
            <div className="grid-right">
              <ul>
                {skills.map((skill, index) => <li key={index}>{skill}</li>)}
              </ul>
              <div className="button-container">
                {presentationUrl ? <a className="grid-right-button" href={presentationUrl} target="_blank" rel="noopener noreferrer"><IoMdEye className="button-icon" /> view</a> : ""}
                {codeUrl ? <a className="grid-right-button" href={codeUrl} target="_blank" rel="noopener noreferrer"><FaCode className="button-icon" /> code</a> : ""}
              </div>
              
            </div>
          </div>

          <p className="about">About</p>
          <p className="description">{description}</p>

          <div className="project-images">
            {detailsImages.map((image, index) => <img src={image} key={index} alt="project content" onClick={() => openModal(image)} className="project-image" />)}
          </div>
        </div>
      </DetailsContainer>
    )
  }
}

export default DetailsPage;

const DetailsContainer = styled.div`
  background: var(--backgroundColor);
  min-height: calc(100vh - 3.7rem - 4rem);
  
  .project-container {
    padding-top: 2.5rem;
    margin: auto;
    width: 90vw;
    max-width: 1100px;
  }

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
    grid-template-columns: 1fr 1fr;
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
    margin-right: 0.6rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }

  .grid-right-button {
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
    margin-right: 1rem;
  }

  .button-icon {
    font-size: 1.5rem;
    vertical-align: middle;
  }

  .about {
    text-transform: uppercase;
    font-family: 'Black Ops One', cursive;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  .description {
    white-space: pre-line;
    text-align: justify;
    padding-bottom: 3rem;
  }

  .project-images { 
    padding-bottom: 3rem;
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

  @media screen and (max-width: 1042px) {
    .project-container {
      width: 88vw;
    }

    .project-grid {
      grid-template-columns: 1fr;
    }

    ul {
      justify-content: center;
    }

    li {
      margin-right: 0.3rem;
      margin-left: 0.3rem;
    }

    .button-container {
      display: flex;
      justify-content: center;
    }

    .grid-right-button {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      margin-top: 1rem;
    }

    .about {
      margin-top: 2.6rem;
    }


    .project-images {
      margin-right: auto;
      margin-left: auto;
      grid-gap: 1.6rem;
    }
  }

  @media screen and (max-width: 773px) {
    .project-images {
      margin-right: auto;
      margin-left: auto;
      width: 88vw;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }

    .project-images img {
      cursor: default;
    }
  }

  @media screen and (max-width: 500px) {
    li {
      margin-right: 0.3rem;
      margin-left: 0.3rem;
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 400px) {
    .project-title {
      font-size: 2rem;
    }

    li {
      margin-right: 0.1rem;
      margin-left: 0.1rem;
      font-size: 0.7rem;
    }
  }

  @media screen and (min-width: 768px) {
    .grid-right-button:hover {
      color: var(--hoverColor);
      border: 2px solid var(--hoverColor);
    }
  }
`;

const NoProjectsContainer = styled.div`
  background-color: var(--backgroundColor);
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