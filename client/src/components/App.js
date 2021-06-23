import React from 'react';
import { Route, withRouter, Switch } from 'react-router';
import SearchContainer from '../containers/SearchContainer';
import UserRegistration from './UserRegistration';
import Dashboard from '../containers//Dashboard';
import Home from './Home.js';
import NavBar from './NavBar';

function App() {
  const renderForm = () => {
    return <UserRegistration />;
  };

  const renderDashboard = () => {
    return <Dashboard />;
  };

  const renderSearch = () => {
    return <SearchContainer />;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Friend A Friend</h1>
        <div>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,900;1,100&display=swap');
          </style>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/login" render={renderForm} /> */}
            <Route path="/signup" render={renderForm} />
            <Route path="/dashboard" render={renderDashboard} />
            <Route path="/search" render={renderSearch} />
            {/* <Route path="/about" render={renderErrorPage} /> */}
          </Switch>
        </div>
      </header>
    </div>
  );
}

export default App;
