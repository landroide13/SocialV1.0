import React from 'react'

export default (props) => {

  const id = props.match.params.id;

  return (
    <React.Fragment>
      
      <div className="container section article-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Article Title - {id} </span>
            <p>Lorem  ipsum Lorem  ipsumLorem  ipsum</p>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by NN</div>
              <div>2nd September, 2:00AM</div>
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}