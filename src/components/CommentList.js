import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CommentList extends Component {

  renderComment = () => (
    this.props.comments.map(comment => <li key={`cmt_${comment}`}>{ comment }</li>)
  )
  render() {
    return (
      <div>
        <ul>
          {this.renderComment()}
        </ul>
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