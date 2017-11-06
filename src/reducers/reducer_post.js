import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

// To Do: Make logic make sense
export default function (state = initialPostState, action) {
  switch (action.type) {
    case ADD_POST :
      return {
        // ...state,
        // [action]: ...,
      }
    case EDIT_POST :
      return {
        // ...state,
        // [action]: ...,
      }
    case DELETE_POST :
      return {
        // ...state,
        // [action]: ...,
      }
    default :
      return state
  }
}

// This should be an object, since for the proper data structuring of a store.
// But is an array so it can be mapped over.
const initialPostState = [
  {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  {
    id: '6fkdjahfljkahdjfhk3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
]
