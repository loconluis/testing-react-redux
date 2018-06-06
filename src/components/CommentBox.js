import React from 'react'
import { connect } from 'react-redux'
// import action
import { saveComment } from 'actions'

export class CommentBox extends React.Component {
  state = {
    comment: ''
  }

  handleChange = (e) => {
    let value = e.target.value
    this.setState(() => ({ comment: value }))
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.saveComment(this.state.comment)
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

const mapDispatchToProps = dispatch => ({ saveComment: comment => dispatch(saveComment(comment)) })

export default connect(null, mapDispatchToProps)(CommentBox)