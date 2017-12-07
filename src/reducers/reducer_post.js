import { ADD_POST, EDIT_POST, DELETE_POST,
  INCREMENT_VOTE, DECREMENT_VOTE } from '../actions'

export default function (state = {}, action) {
  const { post } = action
  console.log(post, action)
  switch (action.type) {
    case ADD_POST :
      return {
        ...state,
        [post.id]: post
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
