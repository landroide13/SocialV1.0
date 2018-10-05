import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from './components/layout/Nav';
import Dashboard from './components/dashboard/Dashboard'
import ArticleDetails from './components/articles/ArticleDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateArticle from './components/articles/CreateArticle';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/article/:id" component={ArticleDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/new" component={CreateArticle} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
