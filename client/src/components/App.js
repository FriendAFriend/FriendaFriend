import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAccount, loginAccount } from '../actions/index.js';
//import { connect } from 'react-redux';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // const { createAccount, loginAccount } = bindActionCreators(
  //   actionCreators,
  //   dispatch
  // );
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default mapStateToProps(App);

