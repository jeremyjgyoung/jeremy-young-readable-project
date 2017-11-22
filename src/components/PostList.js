import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { deletePost, incrementVote, decrementVote } from '../actions'
import sortBy from 'sort-by'

//Clean up repeated JSX
class PostList extends Component {
  render() {
    let allMappedPosts = (
      this.props.posts.filter(post =>
        post.deleted===false).sort(sortBy('-voteScore')).map((post) =>(
        <Link className="Category-links" to={`/${this.props.category}/${post.id}`}>
          <div className="Post" key={post.id}>
            <button onClick={() =>
              this.props.deletePost({id:post.id, voteScore:post.deleted})}>x</button>
            <h1 className="Post-title">{post.title}</h1>
            <h2 className="Post-author">{post.author}</h2>
            <p className="Post-score"><b>Score:</b> {post.voteScore}</p>
            <button onClick={() =>
              this.props.incrementVote({id:post.id, voteScore:post.voteScore})}>+</button>
            <button onClick={() =>
              this.props.decrementVote({id:post.id, voteScore:post.voteScore})}>-</button>
            <p className="Post-comments"><b>Comments:</b> {post.commentCount}</p>
          </div>
        </Link>
      ))
    )
    let categoryMappedPosts = (
      this.props.posts.filter(post =>
        (post.category===this.props.category && post.deleted===false)).sort(sortBy('-voteScore')).map((post) =>(
      <Link className="Category-links" to={`/${this.props.category}/${post.id}`}>
        <div className="Post" key={post.id}>
          <button onClick={() =>
            this.props.deletePost({id:post.id, voteScore:post.deleted})}>x</button>
          <h1 className="Post-title">{post.title}</h1>
          <h2 className="Post-author">{post.author}</h2>
          <p className="Post-score"><b>Score:</b> {post.voteScore}</p>
          <button onClick={() => this.props.incrementVote({id:post.id})}>+</button>
          <button onClick={() => this.props.decrementVote({id:post.id})}>-</button>
          <p className="Post-comments"><b>Comments:</b> {post.commentCount}</p>
        </div>
      </Link>
      ))
    )
    return (
      <div className="PostList">
        {(this.props.category==='all'||this.props.category===undefined)
        ? allMappedPosts
        : categoryMappedPosts}
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
    deletePost: (data) => dispatch(deletePost(data)),
    incrementVote: (data) => dispatch(incrementVote(data)),
    decrementVote: (data) => dispatch(decrementVote(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
