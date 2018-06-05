import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

// initialize a variable to get global scope
let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})

it('Shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
  // Line below uses for cleaning up the component mounted 
  // ReactDOM.unmountComponentAtNode(div)
})

it('Shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
  // Line below uses for cleaning up the component mounted 
  // ReactDOM.unmountComponentAtNode(div)
})