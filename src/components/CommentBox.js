import React from 'react'

export default class CommentBox extends React.Component {
  state = {
    comment: ''
  }

  handleChange = (e) => {
    let value = e.target.value
    this.setState(() => ({ comment: value }))
  }

  handleOnSubmit = (e) => {
    e.preventDefault()

    // Call an action creator
    // And save the comment

    this.setState(() => ({ comment: '' }))
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          placeholder='Write here...'
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}
