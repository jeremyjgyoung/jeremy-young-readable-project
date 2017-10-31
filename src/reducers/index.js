import { combineReducers } from 'redux'
import PostReducer from './reducer_post'
import VoteReducer from './reducer_vote'
import CommentReducer from './reducer_comment'

const allReducers = combineReducers({
  posts: PostReducer,
  vote: VoteReducer,
  comments: CommentReducer
})

export default allReducers
