import {applyMiddleware,createStore} from 'redux';
// import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import uniteReducers from './reducer/CombineReducer';


const Store=createStore(uniteReducers,{},applyMiddleware(thunk));
export default Store;