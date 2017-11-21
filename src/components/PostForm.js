import React, { Component } from 'react'

// Be able to post
class PostForm extends Component {

  state = { typedPost: '' }
  handleChange = (event) => {
    this.setState({typedPost: event.target.value.trim() })
  }

  render() {
    return (
      <div className="PostForm">
        <form className="Form">
          <form>
            <input type="text" className="Input"
              value={this.state.email}
              onChange={this.handleChange}
             />
          </form>
          <button type="submit" className="Post-button">POST</button>
        </form>
      </div>
    )
  }
} 

export default PostForm
