import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

// Add voting
class PostList extends Component {
  render() {
    {console.log(this.props.category)}
    return (
      <div className="PostList">
        {(this.props.category==='all'||this.props.category===undefined)
        ? this.props.posts.map((post) =>(
        <Link className="Category-links" to={`/${this.props.category}/${post.id}`}>
          <div className="Post" key={post.id}>
            <h1 className="Post-title">{post.title}</h1>
            <h2 className="Post-author">{post.author}</h2>
            <p className="Post-score"><b>Score:</b> {post.voteScore}</p>
            <button onClick={() => post.dispatch({ type: 'INCREMENT_VOTE' })}>+</button>
            <button onClick={() => post.dispatch({ type: 'DECREMENT_VOTE' })}>-</button>
            <p className="Post-comments"><b>Comments:</b> {post.commentCount}</p>
          </div>
        </Link>
        ))
        : this.props.posts.filter(post => post.category===this.props.category).map((post) =>(
        <Link className="Category-links" to={`/${this.props.category}/${post.id}`}>
          <div className="Post" key={post.id}>
            <h1 className="Post-title">{post.title}</h1>
            <h2 className="Post-author">{post.author}</h2>
            <p className="Post-score"><b>Score:</b> {post.voteScore}</p>
            <p className="Post-comments"><b>Comments:</b> {post.commentCount}</p>
          </div>
        </Link>
        ))
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: Object.values(state.posts)
  }
}

export default connect(mapStateToProps)(PostList)
