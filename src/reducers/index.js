import { combineReducers } from 'redux';
import auth from './auth';
import tables from './tables'
import table from './table'
import userId from './userId'
export default combineReducers({ auth, tables, table, userId });
