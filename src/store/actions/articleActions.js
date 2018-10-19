export const createArticle = (article) =>{
  return (dispatch, getState, { getFirebase, getFirestore}) =>{
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('articles').add({
      ...article,
      authorFirstName: profile.firstName,
      authorLasttName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_ARTICLE', article})
    }).catch((err) => {
      dispatch({ type: 'CREATE_ARTICLE', err})
    });
    
  }
}