import React from 'react';
import client from './Contentful';

const ProjectContext = React.createContext();
const ProjectConsumer = ProjectContext.Consumer;

class ProjectProvider extends React.Component {
  state = {
    projects: [],
    highlightedProjects: []
  }

  /* Get data from Contentful */
  getData = async () => {
    try {
      let response = await client.getEntries({
        content_type: "portfolioProjects",
        order: "-sys.createdAt"
      });
      let projects = this.formatData(response.items);
      let highlightedProjects = projects.filter(project => project.highlighted === true);
      this.setState({
        projects,
        highlightedProjects
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let project = { ...item.fields, images, id };
      return project;
    });
    return tempItems;
  }

  render() {
    return (
      <ProjectContext.Provider value={{
        ...this.state
      }}>
        {this.props.children}
      </ProjectContext.Provider>
    )
  }
}

export { ProjectProvider, ProjectContext, ProjectConsumer };