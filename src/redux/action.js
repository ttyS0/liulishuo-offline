export const LIST_START = "LIST_START";
export const LIST_SUCCESS = "LIST_SUCCESS";
export const LIST_FAILURE = "LIST_FAILURE";

export const listStart = () => {
  return {
    type: LIST_START,
    loading: true,
  }
}

export const listSuccess = (list) => {
  return {
    type: LIST_SUCCESS,
    loading: false,
    payload: list
  }
}

export const listFailure = () => {
  return {
    type: LIST_FAILURE,
    loading: false,
    payload: list
  }
}

export const ARTICLE_START = "ARTICLE_START";
export const ARTICLE_SUCCESS = "ARTICLE_SUCCESS";
export const ARTICLE_FAILURE = "ARTICLE_FAILURE";

export const articleStart = () => {
  return {
    type: ARTICLE_START,
    loading: true,
  }
}

export const articleSuccess = (id, article) => {
  return {
    type: ARTICLE_SUCCESS,
    id,
    loading: false,
    payload: article
  }
}

export const articleFailure = () => {
  return {
    type: ARTICLE_FAILURE,
    loading: false,
    payload: list
  }
}