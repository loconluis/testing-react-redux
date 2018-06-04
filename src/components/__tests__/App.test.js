import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('Shows a comment box', () => {
  const div = document.createElement('div')

  ReactDOM.render(<App />, div)
  // Looks inside the div
  // and checks to see if the CommentBox is in there
  // console.log('div', div.innerHTML) output <div><div>CommentBox</div><div>Comment List</div></div>
  expect(div.innerHTML).toContain('CommentBox')


  // Line below uses for cleaning up the component mounted 
  ReactDOM.unmountComponentAtNode(div)
})