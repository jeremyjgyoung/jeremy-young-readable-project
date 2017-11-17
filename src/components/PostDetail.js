import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class PostList extends Component {
  render() {
    return (
      <div>
      <div className="PostList">
        {this.props.posts.filter(post => post.id===this.props.post_id).map((post) =>(
        <Link className="Category-links" to={`/${this.props.category}/${post.id}`}>
          <div className="Post" key={post.id}>
            <h1 className="Post-title">{post.title}</h1>
            <h1 className="Post-author">{post.author}</h1>
            <p className="Post-body">{post.body}</p>
            <p className="Post-score"><b>Score:</b> {post.voteScore}</p>
            <p className="Post-comments"><b>Comments:</b> {post.commentCount}</p>
          </div>
        </Link>
        ))}
      </div>
      <div className="PostList">
        {this.props.comments.filter(comment => comment.parentId===this.props.post_id).map((comment) =>(
          <div className="Post" key={comment.id}>
            <h1 className="Post-author">{comment.author}</h1>
            <p className="Post-body">{comment.body}</p>
            <p className="Post-score"><b>Score:</b> {comment.voteScore}</p>
          </div>
        ))}
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: Object.values(state.posts),
    comments: Object.values(state.comments)
  }
}

export default connect(mapStateToProps)(PostList)
