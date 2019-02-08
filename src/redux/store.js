import { createBrowserHistory } from 'history'
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import createRootReducer from './reducers';

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        logger
      )
    )
  )
  return store
}