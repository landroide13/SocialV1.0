import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createArticle } from '../../store/actions/articleActions';

class CreateArticle extends Component {

  state = {
    title: '',
    content: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.createArticle(this.state);
  }

  render() {
    return (
      <React.Fragment>

        <div className="container">
          <form onSubmit={this.handleOnSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Article</h5>

            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="content">Content</label>
              <textarea className="materialize-textarea" id="content" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <button className="btn green lighten-1 z-depth-0">Submit</button>
            </div>

          </form> 
        </div>   
        
      </React.Fragment>
    )
  }
}

const MapDispatchToProps = (dispatch) =>{
  return{
    createArticle: (article) => dispatch(createArticle(article))
  }
}


export default connect(null, MapDispatchToProps)(CreateArticle);