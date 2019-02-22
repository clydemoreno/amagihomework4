import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppComponent';
import * as serviceWorker from './serviceWorker';
import { Provider, connect } from 'react-redux';

import store from './Store';

import * as ActionTypes from './actionType';

//Actions

//ACTION CREATORS

const increment = () => ({
    type: ActionTypes.INCREMENT,

});



////connect React and Redux

const mapStateToProps = state => ({
    count: state.count
});

const mapDispatchToProps = ({
    increment
})





const AppContainer = connect({
    mapStateToProps,
    mapDispatchToProps
})(App);


const Main = () => (<Provider store={store}>
    <AppContainer />
</Provider>)





ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
