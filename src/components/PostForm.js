import React, { Component } from 'react'
import {connect} from 'react-redux'
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
  render() {
    return (
      <div className="PostForm">
        <form className="Form">
            <input type="text" className="Input"
              placeholder="your name"
              value={this.state.author}
              onChange={this.handleChangeAuthor}
             />
             <input type="text" className="Input"
               placeholder="title"
               value={this.state.title}
               onChange={this.handleChangeTitle}
              />
            <input type="text" className="Input"
              placeholder="post"
              value={this.state.typedPost}
              onChange={this.handleChangePost}
             />
             <select
               value={this.state.category}
               onChange={this.handleChangeCategory}>
                <option value="">Choose Category</option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="read">Udacity</option>
             </select>
          <button type="submit" className="Post-button" onClick={() =>
            this.props.addPost({author:this.state.author, title:this.state.title, body:this.state.typedPost, category:this.state.category, })}
          >POST</button>
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
