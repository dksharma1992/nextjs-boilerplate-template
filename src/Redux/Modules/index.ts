import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './Counter/';

export const rootReducer = combineReducers({
  ...counterReducer,
});

//export const combinedMiddleware = userAPI.middleware;
