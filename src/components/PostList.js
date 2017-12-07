import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost, incrementVote, decrementVote } from '../actions'
import sortBy from 'sort-by'
import * as ReadableAPI from '../utils/ReadableAPI'

class PostList extends Component {
  state = {}
  componentDidMount() {
    ReadableAPI.getPosts().then((posts) => {
      console.log(posts)
      this.setState(() => ({
        posts: Object.keys(posts)
      }))
    })
  }
  render() {
    let allMappedPosts = this.props.posts.filter(post=>
      post.deleted===false).sort(sortBy('-voteScore'))
    let categoryMappedPosts = this.props.posts.filter(post =>
        (post.category===this.props.category && post.deleted===false)).sort(sortBy('-voteScore'))
    let filteredPosts = (this.props.category==='all'||this.props.category===undefined)
        ? allMappedPosts
        : categoryMappedPosts
    return (
      <div className="PostList">
        {filteredPosts.map((post) =>(
          <Link className="Category-links" to={`/${this.props.category}/${post.id}`} key={post.id}>
            <div className="Post">
              <div className="Button-to-right">
                <button className="Button-delete" onClick={() =>
                this.props.deletePost({id:post.id, voteScore:post.deleted})}>x</button>
              </div>
              <h1 className="Post-title">{post.title}</h1>
              <h2 className="Post-author">{post.author}</h2>
              <div className="Div-score">
                <p className="Post-score"><b>Score:</b> {post.voteScore}</p>
                <button className="Button-minus" onClick={() =>
                  this.props.decrementVote({id:post.id, voteScore:post.voteScore})}>-</button>
                <button className="Button-plus" onClick={() =>
                  this.props.incrementVote({id:post.id, voteScore:post.voteScore})}>+</button>
              </div>
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
