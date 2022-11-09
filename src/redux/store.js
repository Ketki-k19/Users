import {createStore,applyMiddleware} from 'redux'
import userReducer from './Users/userReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
const store=createStore(userReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
export default store