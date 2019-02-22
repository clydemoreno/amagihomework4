import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComponent from './AppComponent';

import { connect } from 'react-redux';
import {INCREMENT,DECREMENT} from './actionType';

const increment = () => ({
  type: INCREMENT,

});
const decrement = () => ({
  type: DECREMENT,

});

// const increment = () => console.log('im here');



////connect React and Redux

const mapStateToProps = state => ({
    count: state.count
  });
  
  const mapDispatchToProps = ({
    increment,
    decrement

  })


class App extends Component {
  // increment = (c) => c++;
  render() {
    return (
      <AppComponent count={this.props.count} 
      decrement={this.props.decrement} 
      increment={this.props.increment}  />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
