import { ADD_POST, EDIT_POST, DELETE_POST,
  INCREMENT_VOTE, DECREMENT_VOTE } from '../actions'

export default function (state = initialPostState, action) {
  const { author, title, body, category, id, voteScore} = action
  switch (action.type) {
    case ADD_POST :
      let randomlyGenId = `${Math.floor(1000000000*Math.random())}${Date.now()}`
      console.log(`${randomlyGenId} the post is author: ${author} title: ${title} body: ${body} category: ${category} `)
      return {
        ...state,
        [randomlyGenId]: {
          id: `${randomlyGenId}`,
          timestamp: Date.now(),
          title: `${title}`,
          body: `${body}`,
          author: `${author}`,
          category: `${category}`,
          voteScore: 0,
          deleted: false,
          commentCount: 0
        }
      }
    case EDIT_POST :
      return {
        // ...state,
        // [action]: ...,
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

const initialPostState = {
  "8xf0y6ziyjabvozdd253nd": {
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
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
}
