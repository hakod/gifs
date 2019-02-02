import { combineReducers } from 'redux'
import gifReducer from './gifReducer'
import collReducer from './collReducer'
import viewReducer from'./viewReducer'

const rootReducer = combineReducers({
   gifs: gifReducer,
   coll: collReducer,
   view: viewReducer
})

export default rootReducer