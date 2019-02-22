import reducer from './Reducer';
import { createStore, applyMiddleware } from 'redux'
//Initial State

const initialState = {
    count: 0
}
 


//store setup


const store = createStore(reducer, initialState
    , window.devToolsExtension ? window.devToolsExtension : undefined
)

export default store;