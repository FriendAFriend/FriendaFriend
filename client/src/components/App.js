import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../actions/actionCreator';
//import { connect } from 'react-redux';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { createAccount, loginAccount } = bindActionCreators(
    actionCreators,
    dispatch
  );
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

<<<<<<< HEAD
=======
// export default mapStateToProps(App);
export default App;
>>>>>>> 7777b297919d73711399f292042e10f9c636b53f
