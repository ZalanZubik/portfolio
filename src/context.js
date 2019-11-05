import React from 'react';

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