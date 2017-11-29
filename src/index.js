import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import reducer from './reducers/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store = createStore(reducer,
  composeEnhancers(applyMiddleware(logger)))

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
  document.getElementById('root'));
registerServiceWorker();
