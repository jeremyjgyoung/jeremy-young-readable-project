import React, { Component } from 'react'
import PostVote from './PostVote'
import postVote from '../reducers/index'
import { createStore } from 'redux'

class PostDetail extends Component {
  render() {
    // postVote not getting the same object...
    const store = createStore(postVote)

    return (
      <div className="Post">
        <h1 className="Post-title">Thoughts about Words! YAAAY!</h1>
        <p className="Post-info"><i>by Jeremy on October 4th</i></p>
        <p className="Post-body">These are words. The best words.</p>
        <p className="Post-score"><b>Score:</b> 4/4</p>
        <PostVote
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
      </div>
    )
  }
} 

export default PostDetail
