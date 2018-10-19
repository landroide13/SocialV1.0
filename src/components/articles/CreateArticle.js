import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
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
    this.props.history.push('/')
  }

  render() {

    const { auth } = this.props

    if(!auth.uid) return <Redirect to='/signin' />

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

const mapStateToProps = (state) =>{
  return{
    auth: state.firebase.auth
  }
}


const MapDispatchToProps = (dispatch) =>{
  return{
    createArticle: (article) => dispatch(createArticle(article))
  }
}


export default connect(mapStateToProps, MapDispatchToProps)(CreateArticle);