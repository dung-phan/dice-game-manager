import { combineReducers } from 'redux';
import auth from './auth';
import tables from './tables'
export default combineReducers({ auth, tables });
