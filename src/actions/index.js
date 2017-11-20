export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DECREMENT_VOTE = 'DECREMENT_VOTE'
export const INCREMENT_VOTE = 'INCREMENT_VOTE'


// To Do: Take out the unneccessary parts of each action creator (ie. addComment doesn't need a voteScore)
export function addPost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: ADD_POST,
    id, timestamp, title, body, author, category, voteScore, deleted,
  }
}

export function editPost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: EDIT_POST,
    id, timestamp, title, body, author, category, voteScore, deleted,
  }
}

export function deletePost ({ id, deleted }) {
  return {
    type: DELETE_POST,
    id, deleted,
  }
}

export function addComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: ADD_COMMENT,
    id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted
  }
}

export function editComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: EDIT_COMMENT,
    id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted
  }
}

export function deleteComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: DELETE_COMMENT,
    id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted
  }
}

export function decrementVote ({ id, voteScore }) {
  return {
    type: DECREMENT_VOTE,
    id, voteScore
  }
}

export function incrementVote ({ id, voteScore }) {
  return {
    type: INCREMENT_VOTE,
    id, voteScore
  }
}
