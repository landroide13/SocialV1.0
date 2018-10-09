import React from 'react'
import ArticleSummary from './ArticleSummary';
import { Link } from 'react-router-dom';
 
export default ({ articles }) => {
  return (
    <React.Fragment>
      <div className="article-list section">
        { articles && articles.map(article =>{
          return  <Link to={'/article/' + article.id } key={article.id}><ArticleSummary article={article}  /></Link>
        })}

      </div>
      
    </React.Fragment>
  )
}