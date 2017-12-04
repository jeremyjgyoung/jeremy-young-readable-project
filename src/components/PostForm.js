import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import Modal from 'react-modal'

// Clean up handlers, if possible
class PostForm extends Component {
  state = {
    author: '',
    title: '',
    typedPost: '',
    category: '',
    postModalIsOpen: false,
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
  openPostModal = () => {
    this.setState({postModalIsOpen: true})
  }
  closePostModal = () => {
    this.setState({postModalIsOpen: false})
  }
  onPost = () => {
    this.setState({postModalIsOpen: false})
    this.props.addPost({author:this.state.author, title:this.state.title, body:this.state.typedPost, category:this.state.category })
  }
  render() {
    return (
      <div className="PostForm">
        <button
            className='Button-open-post-modal'
            onClick={this.openPostModal}>
              Add Post
        </button>
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={this.state.postModalIsOpen}
          style={customStyles}
          contentLabel='Post Modal'
        >
          <button onClick={this.closePostModal}>close</button>
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
                    <option value="">Category</option>
                    <option value="react">React</option>
                    <option value="redux">Redux</option>
                    <option value="read">Udacity</option>
                 </select>
                 <button className="Post-button" onClick={this.onPost}>
                   POST
                 </button>
              </div>
          </form>
        </Modal>
      </div>
    )
  }
}

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.50)'
  },
  content : {
    position              : 'fixed',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
