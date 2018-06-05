import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import CommentBox from '../CommentBox'

it('Shows a comment box', () => {
  const wrapped = shallow(<App />)
  expect(wrapped.find(CommentBox).length).toEqual(1)

  // Line below uses for cleaning up the component mounted 
  // ReactDOM.unmountComponentAtNode(div)
})