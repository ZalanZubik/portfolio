import React from 'react';
import client from './Contentful';

client.getEntries({
  content_type: "portfolioProjects"
})
.then((response) => console.log(response.items))
.catch(console.error)

const ProjectContext = React.createContext();
const ProjectConsumer = ProjectContext.Consumer;

class ProjectProvider extends React.Component {
  render() {
    return (
      <ProjectContext.Provider>
        {this.props.children}
      </ProjectContext.Provider>
    )
  }
}

export { ProjectProvider, ProjectContext, ProjectConsumer };