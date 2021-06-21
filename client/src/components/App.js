//import logo from "../logo.svg";
//import "../App.css";
import React from 'react';

import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Looks like it's Working. Made a change</p>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default mapStateToProps(App);
