import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'

it('can fetch a list of comments and display them', () => {
  // Attemp to render the *entire* app
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  )

  // find the fetchComments button and ClickIt


  // Expect to find a list of comments!
})