import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <Link to="/post-detail" className="Post-link"style={{ textDecoration: 'none' }}>
        <h1 className="Post-title">Thoughts about Words</h1>
        <p className="Post-body">These are words. The best words.</p>
        <p className="Post-score"><b>Score:</b> 4/4</p>
        <p className="Post-comments"><b>Comments:</b> 8</p>
      </Link>
    </div>
  )
}
} 

export default Post
