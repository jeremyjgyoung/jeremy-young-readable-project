import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addPost } from '../actions'

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
            <input type="text" className="Input"
              value={this.state.email}
              onChange={this.handleChange}
             />
          <button type="submit" className="Post-button"
            onClick={() => this.props.addPost({body:this.state.typedPost})}
            >POST</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPost:  (data) => dispatch(addPost(data))
  }
}

export default connect(mapDispatchToProps)(PostForm)
