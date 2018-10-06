export const createArticle = (article) =>{
  return (dispatch, getState, { getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    firestore.collection('articles').add({
      ...article,
      authorFirstName: 'Eltro',
      authorLasttName: 'Lazo',
      authorId: 1313,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_ARTICLE', article})
    }).catch((err) => {
      dispatch({ type: 'CREATE_ARTICLE', err})
    });
    
  }
}