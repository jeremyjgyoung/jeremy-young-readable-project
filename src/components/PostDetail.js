import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { deletePost, incrementVote, decrementVote, deleteComment, incrementCommentVote, decrementCommentVote } from '../actions'
import sortBy from 'sort-by'

class PostList extends Component {
  render() {
    return (
      <div>
      <div className="PostList">
        {Object.values(this.props.posts).filter(post => (post.id===this.props.post_id && post.deleted===false)).map((post) =>(
        <Link className="Category-links" to={`/${this.props.category}/${post.id}`} key={post.id}>
          <div className="Post">
            <button onClick={() => this.props.deletePost({id:post.id, voteScore:post.deleted})}>x</button>
            <h1 className="Post-title">{post.title}</h1>
            <h1 className="Post-author">{post.author}</h1>
            <p className="Post-body">{post.body}</p>
            <p className="Post-score"><b>Score:</b> {post.voteScore}</p>
            <button onClick={() => this.props.incrementVote({id:post.id, voteScore:post.voteScore})}>+</button>
            <button onClick={() => this.props.decrementVote({id:post.id, voteScore:post.voteScore})}>-</button>
            <p className="Post-comments"><b>Comments:</b> {post.commentCount}</p>
          </div>
        </Link>
        ))}
      </div>
      <div className="PostList">
        {this.props.comments.filter(comment => (comment.parentId===this.props.post_id && comment.deleted===false && this.props.posts[comment.parentId].deleted===false)).sort(sortBy('-voteScore')).map((comment) =>(
          <div className="Post" key={comment.id}>
            <button onClick={() => this.props.deleteComment({id:comment.id, voteScore:comment.deleted})}>x</button>
            <h1 className="Post-author">{comment.author}</h1>
            <p className="Post-body">{comment.body}</p>
            <p className="Post-score"><b>Score:</b> {comment.voteScore}</p>
            <button onClick={() => this.props.incrementCommentVote({id:comment.id, voteScore:comment.voteScore})}>+</button>
            <button onClick={() => this.props.decrementCommentVote({id:comment.id, voteScore:comment.voteScore})}>-</button>
          </div>
        ))}
      </div>
      </div>
    )
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
    deleteComment:  (data) => dispatch(deleteComment(data)),
    incrementCommentVote: (data) => dispatch(incrementCommentVote(data)),
    decrementCommentVote: (data) => dispatch(decrementCommentVote(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
