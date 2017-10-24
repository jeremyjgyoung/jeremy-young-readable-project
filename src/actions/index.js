export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

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

export function deletePost ({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return {
    type: DELETE_POST,
    id, timestamp, title, body, author, category, voteScore, deleted,
  }
}

export function addComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: ADD_COMMENT,
    id, timestamp, title, body, author, category, voteScore, deleted,
  }
}

export function editComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: EDIT_COMMENT,
    id, timestamp, title, body, author, category, voteScore, deleted,
  }
}

export function deleteComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: DELETE_COMMENT,
    id, timestamp, title, body, author, category, voteScore, deleted,
  }
}
