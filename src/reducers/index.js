import { combineReducers } from 'redux'
import PostReducer from './reducer_post'
import CommentReducer from './reducer_comment'

const allReducers = combineReducers({
  posts: PostReducer,
  comments: CommentReducer
})

export default allReducers
