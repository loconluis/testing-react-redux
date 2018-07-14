import React from 'react'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

export default () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <CommentBox />
          <CommentList />
        </div>
      </div>
    </div>
  )
}
