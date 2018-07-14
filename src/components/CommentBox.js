import React from 'react'
import { connect } from 'react-redux'
import '../styles/styles.css'
// import action
import { saveComment, fetchComments } from 'actions'

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
      <div className="row">
        <div className="col-md-12">
          <div className="card_container">
            <div className="text-center">
              <h4>Testing Redux</h4>
            </div>
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="text-area-comment">Add a comment</label>
                <textarea
                  id='text-area-comment'
                  className="form-control textarea-comment"
                  placeholder='Write here...'
                  value={this.state.comment}
                  onChange={this.handleChange}
                />
                <div className="submit_container">
                  <button
                    className="btn btn-light btn-submit"
                  >Submit Comment</button>
                </div>
              </div>
            </form>
            </div>
            <div className="row">
              <div className="col-md-12 text-right">
                <button
                  className="fetch-comment btn btn-link"
                  onClick={this.props.fetchComments}
                >
                  Fetch Comment
                </button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  { 
    saveComment: comment => dispatch(saveComment(comment)),
    fetchComments: () => dispatch(fetchComments())
  }
)

export default connect(null, mapDispatchToProps)(CommentBox)