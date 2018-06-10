import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'

beforeEach(function () {
  // import and pass your custom axios instance to this method
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Hola'}, {name: 'Adios'}, {name: 'Otro'}]
  })
})

afterEach(function () {
  // import and pass your custom axios instance to this method
  moxios.uninstall()
})


it('can fetch a list of comments and display them', (done) => {
  // Attemp to render the *entire* app
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  )

  // find the fetchComments button and ClickIt
  wrapper.find('.fetch-comment').simulate('click')

  // Expect to find a list of comments!
  moxios.wait(() => {
    wrapper.update()
    expect(wrapper.find('li').length).toEqual(3)
    done()
  })
  

})