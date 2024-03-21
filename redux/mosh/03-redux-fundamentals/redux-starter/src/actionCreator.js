import * as actionsTpes from "./actionTypes"

export const bugAdded = description => ({
  type: actionsTpes.BUG_ADDED,
  payload: {
    description
  }
})

export const bugResolved = id => ({
  type: actionsTpes.BUG_RESOLVED,
  payload: {
    id
  }
})

export const bugRemoved = id => ({
  type: actionsTpes.BUG_REMOVED,
  payload: {
    id
  }
})



