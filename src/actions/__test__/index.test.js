import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types'

describe('saveComment testing', () => {
  it('has the correct type', () => {
    let action = saveComment()
    // console.log('action', action)
    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has the correct payload', () => {
    let payload = 'Hey im testing'
    let action = saveComment(payload)
    // console.log('action', action)
    expect(action.payload).toEqual(payload)
  })
});