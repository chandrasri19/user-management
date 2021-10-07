//import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import { configureStore } from 'redux-inject-reducer-and-saga';

const store = configureStore();
console.log(store);
//var commonstore=store.liftedStore;
global.store = store;

export { store };
