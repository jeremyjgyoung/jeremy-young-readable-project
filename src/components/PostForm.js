import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

// Clean up handlers, if possible
class PostForm extends Component {
  state = {
    author: '',
    title: '',
    typedPost: '',
    category: ''
  }
  handleChangeAuthor = (event) => {
    this.setState({author: event.target.value })
  }
  handleChangeTitle = (event) => {
    this.setState({title: event.target.value })
  }
  handleChangePost = (event) => {
    this.setState({typedPost: event.target.value })
  }
  handleChangeCategory = (event) => {
    this.setState({category: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
  }
  render() {
    return (
      <div className="PostForm">
        <form onSubmit={this.handleSubmit} className="Form">
            <input type="text" className="Input-name"
              placeholder="your name"
              value={this.state.author}
              onChange={this.handleChangeAuthor}
             />
             <input type="text" className="Input-title"
               placeholder="title"
               value={this.state.title}
               onChange={this.handleChangeTitle}
              />
            <textarea className="Input-post"
              placeholder="post"
              value={this.state.typedPost}
              onChange={this.handleChangePost}
             />
             <div className="Post-cat-post">
               <select className="Select-category"
                 value={this.state.category}
                 onChange={this.handleChangeCategory}>
                  <option value="">Choose Category</option>
                  <option value="react">React</option>
                  <option value="redux">Redux</option>
                  <option value="read">Udacity</option>
               </select>
               <button className="Post-button" onClick={() =>
                 this.props.addPost({author:this.state.author, title:this.state.title, body:this.state.typedPost, category:this.state.category, })}
               >POST</button>
            </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: Object.values(state.posts)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: (data) => dispatch(addPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
