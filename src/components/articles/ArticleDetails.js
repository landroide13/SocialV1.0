import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

 const ArticlesDetails = (props) => {

  const { article } = props;

  // console.log(props);

  if(article){
    return(
      <div className="container section article-details">
        <div className="card z-depth-1">
          <div className="card-content">
            <span className="card-title">{article.title}</span>
            <p>{article.content}</p>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by { article.authorFirstName } { article.authorLastName}</div>
              <div>{ article.createdAt}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className="container center">
        <p>Loading Project..</p>
      </div>
    )
  }
  return (
    <React.Fragment>
      
      
      
    </React.Fragment>
  )
}

const MapStateToProps = (state, ownProps) =>{
  // console.log(state)
  const id = ownProps.match.params.id
  const articles = state.firestore.data.articles
  const article = articles ? articles[id] : null
  return {
    article: article
  }
}

export default compose(
  connect(MapStateToProps),
  firestoreConnect([
    { collection: 'articles' }
  ])
)(ArticlesDetails);