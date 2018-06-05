import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

it('Shows a comment box', () => {
  const wrapped = shallow(<App />)
  expect(wrapped.find(CommentBox).length).toEqual(1)

  // Line below uses for cleaning up the component mounted 
  // ReactDOM.unmountComponentAtNode(div)
})

it('Shows a comment list', () => {
  const wrapped = shallow(<App />)
  expect(wrapped.find(CommentList).length).toEqual(1)

  // Line below uses for cleaning up the component mounted 
  // ReactDOM.unmountComponentAtNode(div)
})