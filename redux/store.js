

import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

//add middelware
let finalCreateStore = compose(
    applyMiddleware(thunk, createLogger())
)(createStore)

export default function configureStore(initialState = { gifs:[] }) {
    return finalCreateStore(rootReducer, initialState)
}