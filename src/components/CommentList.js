import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CommentList extends Component {

  renderComment = () => (
    this.props.comments.map(comment => (
        <li>
          <div
            key={`cmt_${comment}`}
            className="speech-bubble bubble"
          >
            { comment }
          </div>
        </li>
      )
    )
  )
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-5">
            <ul className="ul_list_comments">
              {this.renderComment()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentList)