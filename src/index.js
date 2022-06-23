import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger'


function* watcherSaga() {
    yield takeEvery('ADD_FAVORITE', addFavorite)
  }

function* addFavorite() {
    console.log('create favorite payload', action.payload)
  try {
    yield axios.post('/api/favorite', action.payload);
  }
  catch (err) {
    console.error(err)
  }
  yield put({
    type: 'FETCH_FAVORITES'
  })
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({ 
        
     }),
    applyMiddleware(sagaMiddleware, logger)
  );
  
  // run the saga middleware
  sagaMiddleware.run(watcherSaga);

  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
