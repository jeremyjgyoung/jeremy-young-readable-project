import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT,
  INCREMENT_COMMENT_VOTE, DECREMENT_COMMENT_VOTE } from '../actions'

export default function (state = initialCommentState, action) {
  const { author, body, id, parentId, voteScore} = action

  switch (action.type) {
    case ADD_COMMENT :
    let randomlyGenId = `${Math.floor(1000000000*Math.random())}${Date.now()}`
    return {
      ...state,
      [randomlyGenId]: {
        id: `${randomlyGenId}`,
        parentId: `${parentId}`,
        timestamp: Date.now(),
        body: `${body}`,
        author: `${author}`,
        voteScore: 0,
        deleted: false,
        parentDeleted: false
      }
    }
    case EDIT_COMMENT :
      return {
        // ...state,
        // [action]: ...,
      }
      case DELETE_COMMENT :
        return {...state,
          [id]:{ ...state[id], deleted: true}
        }
      case INCREMENT_COMMENT_VOTE :
        return {...state,
          [id]:{ ...state[id], voteScore: voteScore+1}
        }
      case DECREMENT_COMMENT_VOTE :
        return {...state,
          [id]:{ ...state[id], voteScore: voteScore-1}
        }
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
