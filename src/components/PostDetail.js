import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost, incrementVote, decrementVote,
  addComment, deleteComment, editPost, upvoteComment, decrementCommentVote } from '../actions'
import sortBy from 'sort-by'
import Modal from 'react-modal'

class PostDetail extends Component {
  state = {
    author: '',
    title: '',
    typedPost: '',
    category: '',
    postModalIsOpen: false,
    editPostModalIsOpen: false,
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
  // handleSubmit may not be needed
  handleSubmit = (event) => {
    event.preventDefault()
  }
  openPostModal = () => {
    this.setState({postModalIsOpen: true})
  }
  closePostModal = () => {
    this.setState({postModalIsOpen: false})
  }
  openEditPostModal = () => {
    this.setState({editPostModalIsOpen: true})
  }
  closeEditPostModal = () => {
    this.setState({editPostModalIsOpen: false})
  }
  onEditPost = () => {
    this.setState({postModalIsOpen: false})
    this.props.addComment({parentId: this.props.post_id, author:this.state.author, title:this.state.title, body:this.state.typedPost })
  }
  onPost = () => {
    this.setState({postModalIsOpen: false})
    this.props.addComment({parentId: this.props.post_id, author:this.state.author, title:this.state.title, body:this.state.typedPost })
  }
  render() {
    return (
      <div>
        <div className="PostList">
          {Object.values(this.props.posts).filter(post => (post.id===this.props.post_id && post.deleted===false)).map((post) =>(
          <Link className="Category-links" to={`/${this.props.category}/${post.id}`} key={post.id}>
            <div className="Post">
              <div className="Button-to-right">
                <button
                    className='Button-edit'
                    onClick={this.openEditPostModal}>
                      Edit
                </button>
                <button className="Button-delete" onClick={() =>
                this.props.deletePost({id:post.id, voteScore:post.deleted})}>x</button>
              </div>
              <h1 className="Post-title">{post.title}</h1>
              <h1 className="Post-author">{post.author}</h1>
              <p className="Post-body">{post.body}</p>
              <div className="Div-score">
                <p className="Post-score"><b>Score:</b> {post.voteScore}</p>
                <button className="Button-minus" onClick={() =>
                  this.props.decrementVote({id:post.id, voteScore:post.voteScore})}>-</button>
                <button className="Button-plus" onClick={() =>
                  this.props.incrementVote({id:post.id, voteScore:post.voteScore})}>+</button>
              </div>
              <p className="Post-comments"><b>Comments:</b> {post.commentCount}</p>
              <button
                  className='Button-open-post-modal'
                  onClick={this.openPostModal}>
                    Add Comment
              </button>
            </div>
          </Link>
          ))}
        </div>
        <div className="PostList">
          {this.props.comments.filter(comment => (comment.parentId===this.props.post_id && comment.deleted===false && this.props.posts[comment.parentId].deleted===false)).sort(sortBy('-voteScore')).map((comment) =>(
            <div className="Post" key={comment.id}>
              <div className="Button-to-right">
                <button className="Button-delete" onClick={() =>
                  this.props.deleteComment({id:comment.id, voteScore:comment.deleted})}>x</button>
              </div>
              <h1 className="Post-author">{comment.author}</h1>
              <p className="Post-body">{comment.body}</p>
              <div className="Div-score">
                <p className="Post-score"><b>Score:</b> {comment.voteScore}</p>
                <button className="Button-minus" onClick={() =>
                  this.props.decrementCommentVote({id:comment.id, voteScore:comment.voteScore})}>-</button>
                <button className="Button-plus" onClick={() =>
                  this.props.upvoteComment({id:comment.id, voteScore:comment.voteScore})}>+</button>
              </div>
            </div>
          ))}
        </div>
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
                placeholder="Your Name"
                value={this.state.author}
                onChange={this.handleChangeAuthor}
               />
              <textarea className="Input-post"
                placeholder="Your Comment"
                value={this.state.typedPost}
                onChange={this.handleChangePost}
               />
               <div className="Post-cat-post">
                 <button className="Post-button" onClick={this.onPost}>
                   POST
                 </button>
              </div>
          </form>
        </Modal>
        <Modal
          className='modal'
          overlayClassName='overlay'
          isOpen={this.state.editPostModalIsOpen}
          style={customStyles}
          contentLabel='Post Modal'
        >
          <button onClick={this.closeEditPostModal}>close</button>
          <form onSubmit={this.handleSubmit} className="Form">
              <input type="text" className="Input-name"
                placeholder="Your Name"
                value={this.state.author}
                onChange={this.handleChangeAuthor}
               />
               <input type="text" className="Input-title"
                 placeholder="Title"
                 value={this.state.title}
                 onChange={this.handleChangeTitle}
                />
              <textarea className="Input-post"
                placeholder="Your Post"
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
                    <option value="udacity">Udacity</option>
                 </select>
                 <button className="Post-button" onClick={this.onPost}>
                   REPOST
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
    posts: state.posts,
    comments: Object.values(state.comments)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost:  (data) => dispatch(deletePost(data)),
    incrementVote: (data) => dispatch(incrementVote(data)),
    decrementVote: (data) => dispatch(decrementVote(data)),
    addComment: (data) => dispatch(addComment(data)),
    deleteComment:  (data) => dispatch(deleteComment(data)),
    editPost: (data) => dispatch(editPost(data)),
    upvoteComment: (data) => dispatch(upvoteComment(data)),
    decrementCommentVote: (data) => dispatch(decrementCommentVote(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
