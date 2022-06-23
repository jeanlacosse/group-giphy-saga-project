import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger'

const favoriteList = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return action.payload
    default:
        return state
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
    alert('GET in fetch')
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

function* watcherSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites)
  }

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({ 
        favoriteList
     }),
    applyMiddleware(sagaMiddleware, logger)
  );
  
  // run the saga middleware
  sagaMiddleware.run(watcherSaga);

  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
