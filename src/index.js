import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { ProjectProvider } from './context';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen(_ => {
  window.scrollTo(0, 0);
})

ReactDOM.render(
  <ProjectProvider>
    <Router history={history}>
      <App />
    </Router>
  </ProjectProvider>
  , document.getElementById('root'));

serviceWorker.unregister();
