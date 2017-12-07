import { ADD_POST, EDIT_POST, DELETE_POST,
  INCREMENT_VOTE, DECREMENT_VOTE } from '../actions'

export default function (state = {}, action) {
  const { author, title, body, category, id, voteScore, commentCount} = action
  switch (action.type) {
    case ADD_POST :
      let randomlyGenId = `${Math.floor(1000000000*Math.random())}${Date.now()}`
      return {
        ...state,
        [randomlyGenId]: {
          id: `${randomlyGenId}`,
          timestamp: Date.now(),
          title: title,
          body: body,
          author: author,
          category: category,
          voteScore: 0,
          deleted: false,
          commentCount: 0
        }
      }
    case EDIT_POST :
      return {
        ...state,
        [id]: {
          id: id,
          timestamp: Date.now(),
          title: title,
          body: body,
          author: author,
          category: category,
          voteScore: voteScore,
          deleted: false,
          commentCount: commentCount
        }
      }
    case DELETE_POST :
      return {...state,
        [id]:{...state[id], deleted: true}
      }
    case INCREMENT_VOTE :
      return {...state,
        [id]:{...state[id], voteScore: voteScore+1}
      }
    case DECREMENT_VOTE :
      return {...state,
        [id]:{...state[id], voteScore: voteScore-1}
      }
    default :
      return state
  }
}

// const initialPostState = {}

// state = {
//   initialPostState: {}
// }
//
// componentDidMount() {
//   ReadableAPI.getPosts().then((fooBar) => {
//     this.setState({ fooBar })
//   })
// }

// const initialPostState = {}
