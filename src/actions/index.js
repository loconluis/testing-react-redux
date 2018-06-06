import { SAVE_COMMENT } from 'actions/types'

export const saveComment = (comment) => {
  return {
    SAVE_COMMENT,
    payload: comment
  }
}