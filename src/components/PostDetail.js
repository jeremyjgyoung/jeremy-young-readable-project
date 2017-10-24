import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <h1 className="Post-title">Thoughts about Words! YAAAY!</h1>
        <p className="Post-info"><i>by Jeremy on October 4th</i></p>
        <p className="Post-body">These are words. The best words.</p>
        <p className="Post-score"><b>Score:</b> 4/4</p>
      </div>
    )
  }
} 

export default Post
