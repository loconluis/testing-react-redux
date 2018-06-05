import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

it('textarea support handle change', () => {
  let value = 'Trying textArea'
  wrapped.find('textarea').simulate('change', { target: { value } })
  wrapped.update()
  expect(wrapped.find('textarea').prop('value')).toEqual(value)
  // expect(wrapped.state('comment')).toBe(value)
})