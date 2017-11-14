import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class PostList extends Component {
  render() {
    return (
      <div className="PostList">
        {this.props.posts.filter(post => post.category===this.props.category).map((post) =>(
        <Link className="Category-links" to={`/${this.props.category}/${post.id}`}>
          <div className="Post" key={post.id}>
            <h1 className="Post-title">{post.title}</h1>
            <p className="Post-body">{post.body}</p>
            <p className="Post-score"><b>Score:</b> {post.voteScore}</p>
            <p className="Post-comments"><b>Comments:</b> {post.commentCount}</p>
          </div>
        </Link>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList)
