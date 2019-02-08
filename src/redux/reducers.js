import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { LIST_START, LIST_SUCCESS, LIST_FAILURE } from "./action"
import { ARTICLE_START, ARTICLE_SUCCESS, ARTICLE_FAILURE } from "./action"

const list = (state = { loading: false }, action)  => {
  switch(action.type) {
    case LIST_START:
      return { ...state, loading: action.loading }
    case LIST_SUCCESS:
      return { ...state, data: action.payload, loading: action.loading }
    case LIST_FAILURE:
      return { ...state, loading: action.loading }
  }
  return state
}

const article = (state = { loading: false }, action)  => {
  console.log(action)
  switch(action.type) {
    case ARTICLE_START:
      return { ...state, loading: action.loading }
    case ARTICLE_SUCCESS:
      return { ...state, data: action.payload, loading: action.loading, id: action.id}
    case ARTICLE_FAILURE:
      return { ...state, loading: action.loading }
  }
  return state
}

export default (history) => combineReducers({
  router: connectRouter(history),
  list,
  article
})
