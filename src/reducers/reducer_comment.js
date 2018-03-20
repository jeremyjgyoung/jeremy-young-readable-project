import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT,
  INCREMENT_COMMENT_VOTE, DECREMENT_COMMENT_VOTE, UPDATE_COMMENT_SUCCESS } from '../actions'

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
        case UPDATE_COMMENT_SUCCESS:
              // upsert
              // update if exists in current list
              if (state.list.find(comment => comment.id === action.comment.id)) {
                  return {
                      ...state,
                      list: state.list.map(comment => {
                          if (comment.id === action.comment.id) {
                              return action.comment;

                          }
                          return comment;
                      })
                  }
              }
              // insert if not existing
              return {
                  ...state,
                  list: [...state.list, action.comment]
              }
      default :
        return state
    }
}

// state = {
//   categories: []
// }
//
// componentDidMount() {
//   ReadableAPI.getCategories().then((categories) => {
//     this.setState({ categories })
//   })
// }

const initialCommentState = {}
