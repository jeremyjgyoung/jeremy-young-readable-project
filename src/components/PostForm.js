import React, { Component } from 'react'

// Be able to post
class PostForm extends Component {
  render() {
    return (
      <div className="PostForm">
        <form className="Form">
          <input type="text" className="Input" />
          <button type="submit" className="Post-button">POST</button>
        </form>
      </div>
    )
  }
} 

export default PostForm
