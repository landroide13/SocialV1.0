import React from 'react'

export default ({ article }) => {
  return (
    <React.Fragment>

      <div className="card z-depth-0 article-summary">
          <div className="card-content grey-text text-darken-3">
            <span className="card-title">{ article.title }</span>
            <p>Topic: </p>
            <p>{ article.content }</p>
            <p className="grey-text">3rd September, 1:00AM </p>
          </div>
        </div>

      
    </React.Fragment>
  )
}