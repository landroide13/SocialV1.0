import React, { Component } from 'react';
import Notifications from './Notifications';
import ArticleList from '../articles/ArticlesList';

import { connect } from 'react-redux';

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
  return{
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(Dashboard);