export const createArticle = (article) =>{
  return (dispatch, getState) =>{
    dispatch({ type: 'CREATE_ARTICLE', article})
  }
}