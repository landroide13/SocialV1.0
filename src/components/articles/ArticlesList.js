import React from 'react'
import ArticleSummary from './ArticleSummary';

export default ({ articles }) => {
  return (
    <React.Fragment>
      <div className="article-list section">
        { articles && articles.map(article =>{
          return <ArticleSummary article={article} key={article.id} />
        })}

      </div>
      
    </React.Fragment>
  )
}