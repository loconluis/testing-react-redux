import React from 'react'
import { mount } from 'enzyme'
import CommentList from 'components/CommentList'
import RootProvider from 'Root'

let wrapped
beforeEach(() => {
  wrapped = mount(
    <RootProvider
      initialState={{ comments: ['Comment 1', 'Comment 2', 'Comment 3', 'Comment 4'] }}
    >
      <CommentList />
    </RootProvider>
  )
})

afterEach(() => {
  wrapped.unmount()
})


it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(4)
})

it('Shows the text of each comment', () => {
  // console.log(wrapped.render().text())
  expect(wrapped.render().text()).toContain('Comment 1')
  expect(wrapped.render().text()).toContain('Comment 2')
  expect(wrapped.render().text()).toContain('Comment 3')
  expect(wrapped.render().text()).toContain('Comment 4')
})