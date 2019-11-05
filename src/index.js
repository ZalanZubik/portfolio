import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProjectProvider } from './context';

ReactDOM.render(
  <ProjectProvider>
    <Router>
      <App />
    </Router>
  </ProjectProvider>
  , document.getElementById('root'));

serviceWorker.unregister();
