import { INCREMENT_VOTE, DECREMENT_VOTE } from '../actions'

export default function (state = 0, action) {
  switch (action.type) {
    case INCREMENT_VOTE:
      return state + 1
    case DECREMENT_VOTE:
      return state - 1
    default:
      return state
  }
}
