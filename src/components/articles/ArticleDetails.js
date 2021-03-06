import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'
import { compose } from 'redux';
import moment from 'moment'

 const ArticlesDetails = (props) => {

  const { article, auth } = props;

  // console.log(props);

  if(!auth.uid) return <Redirect to='/signin' />

  if(article){
    return(
      <div className="container section article-details">
        <div className="card z-depth-1">
          <div className="card-content text-darken-3">
            <span className="card-title">{article.title}</span>
            <p>{article.content}</p>
            <div className="card-action lighten-4 grey-text">
              <div>Posted by: { article.authorFirstName }{ article.authorLastName}</div>
              <div>{moment(article.createdAt.toDate()).calendar()}</div>
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
    article: article,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(MapStateToProps),
  firestoreConnect([
    { collection: 'articles' }
  ])
)(ArticlesDetails);