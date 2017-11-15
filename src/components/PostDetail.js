import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class PostList extends Component {
  render() {
    return (
      <div>
      <div className="PostList">
        {console.log(this.props)}
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
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(PostList)


// import React, { Component } from 'react'
// import PostVote from './PostVote'
// import postVote from '../reducers/index'
// import { createStore } from 'redux'
//
// class PostDetail extends Component {
//   render() {
//     // postVote not getting the same object...
//     const store = createStore(postVote)
//
//     return (
//       <div className="Post">
//         <h1 className="Post-title">Thoughts about Words! YAAAY!</h1>
//         <p className="Post-info"><i>by Jeremy on October 4th</i></p>
//         <p className="Post-body">These are words. The best words.</p>
//         <p className="Post-score"><b>Score:</b> 4/4</p>
//         <PostVote
//           value={store.getState()}
//           onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//           onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//         />
//       </div>
//     )
//   }
// } 
//
// export default PostDetail
