import { listStart, listSuccess, listFailure } from "./action"
import { articleStart, articleSuccess, articleFailure } from "./action"

export const list = () => (dispatch, getState) => {
  dispatch(listStart())
  return fetch("/list.json").then(res => res.json())
  .then((data) => {
    dispatch(listSuccess(data))
  })
  .catch(() => dispatch(listFailure()))
}

export const article = (id) => (dispatch, getState) => {
  dispatch(articleStart())
  return fetch(`/data/${id}.json`).then(res => res.json())
  .then((data) => {
    dispatch(articleSuccess(id, data))
  })
  .catch(() => dispatch(articleFailure()))
}