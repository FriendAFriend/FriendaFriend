import React from 'react';
import { Route, withRouter, Switch } from 'react-router';
import SearchContainer from '../containers/SearchContainer';
import PetsContainer from '../containers/PetsContainer';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';
import Dashboard from '../containers//Dashboard';
import Home from './Home.js';
import NavBar from './NavBar';

function App() {
  const renderRegisterForm = () => {
    return <UserRegistration />;
  };

  const renderLoginForm = () => {
    return <UserLogin />;
  };

  const renderDashboard = () => {
    return <Dashboard />;
  };

  const renderPets = () => {
    return <PetsContainer />;
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
            <Route path="/signup" render={renderRegisterForm} />
            <Route path="/login" render={renderLoginForm} />
            <Route path="/dashboard" render={renderDashboard} />
            <Route path="/pets" render={renderPets} />
            <Route path="/search" render={renderSearch} />
            {/* <Route path="/about" render={renderErrorPage} /> */}
          </Switch>
        </div>
      </header>
    </div>
  );
}

export default App;
