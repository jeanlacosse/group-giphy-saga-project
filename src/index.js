import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger'
                
const favoriteList = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return action.payload
    default:
        return state
  }
}
const categoryList = (state = [], action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.payload
  default:
    return state;
  }
}

function* fetchFavorites(action){
  console.log('rootSaga', action)
  let res;
  try{
    res = yield axios.get('/api/favorite');
    console.log('res.data in fetch', res.data)
  }
  catch (err) {
    alert('GET in fetch favorite')
    console.log(err)
    return;
  }
  // you can't dispatch in your store, so you use a put
  yield put({
    //sending the data back to the reducer to set the state
    type: 'SET_FAVORITES',
    payload: res.data
  })
}
function* fetchCategories(action){
  console.log('rootSaga', action)
  let res;
  try{
    res = yield axios.get('/api/category');
    console.log('res.data in fetch', res.data)
  }
  catch (err) {
    alert('err in fetch category')
    console.log(err)
    return;
  }
  // you can't dispatch in your store, so you use a put
  yield put({
    //sending the data back to the reducer to set the state
    type: 'SET_CATEGORIES',
    payload: res.data
  })
}

function* addCategory(action) {
  try {
    yield axios.put(`/api/favorite/${action.payload.id}`)
      console.log('updating gif', action.payload.id ,'category to', action.payload.category)
  }
  catch (err) {
    console.err('err in category update', err);
    return;
  }
  yield put ({
    type:'FETCH_FAVORITES'
  })
}

function* watcherSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);
    yield takeEvery('ADD_CATEGORY', addCategory);
  }

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({ 
        favoriteList,
        categoryList
     }),
    applyMiddleware(sagaMiddleware, logger)
  );
  
  // run the saga middleware
  sagaMiddleware.run(watcherSaga);

  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
