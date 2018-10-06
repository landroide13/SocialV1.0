import React, { Component } from 'react';
import Notifications from './Notifications';
import ArticleList from '../articles/ArticlesList';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {


  render() {
    // console.log(this.props)

    const { articles } = this.props

    return (
      <React.Fragment>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ArticleList articles={articles} />
            </div>
            <div className="col s12 m5 offset-1">
              <Notifications /> 
            </div> 
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    articles: state.firestore.ordered.articles
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'articles'}
  ])
)(Dashboard);