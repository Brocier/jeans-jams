import {combineReducers} from 'redux'
import artist from './artistReducer.js'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router

// Combine all reducers
const rootReducer = combineReducers({artist, router})

export default rootReducer