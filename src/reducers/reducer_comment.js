import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT,
  INCREMENT_COMMENT_VOTE, DECREMENT_COMMENT_VOTE } from '../actions'

// To Do: Make logic make sense
// Clean up logic with ES6 code
export default function (state = initialCommentState, action) {
  const { id } = action

  switch (action.type) {
    case ADD_COMMENT :
      return {
        // ...state,
        // [action]: ...,
      }
    case EDIT_COMMENT :
      return {
        // ...state,
        // [action]: ...,
      }
      case DELETE_COMMENT :
        let delState = {...state}
        delState[id].deleted = true
        return delState
      case INCREMENT_COMMENT_VOTE :
        let incState = {...state}
        incState[id].voteScore++
        return incState
      case DECREMENT_COMMENT_VOTE :
        let decState = {...state}
        decState[id].voteScore--
        return decState
      default :
        return state
    }
}

const initialCommentState = {
  "894tuq4ut84ut8v4t8wun89g": {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  },
  "8tu4bsun805n8un48ve89": {
    id: '8tu4bsun805n8un48ve89',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  }
}
