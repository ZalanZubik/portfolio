import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import DetailsPage from './components/DetailsPage';
import ErrorPage from './components/ErrorPage';
import ScrollUpButton from './components/ScrollUpButton';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/projects/:slug" component={DetailsPage} />
        <Route component={ErrorPage} />
      </Switch>
      <ScrollUpButton />
      <Footer />
    </>
  );
}

export default App;
