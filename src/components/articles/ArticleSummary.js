import React from 'react'
import moment from 'moment'

export default ({ article }) => {
  return (
    <React.Fragment>

      <div className="card z-depth-0 article-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{ article.title }</span>
            <p>Posted by: { article.authorFirstName }{ article.authorLastName }</p>
            <p className="grey-text">{ moment(article.createdAt.toDate()).calendar() }</p>
          </div>
        </div>

      
    </React.Fragment>
  )
}