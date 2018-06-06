import React from 'react'
import ReactDOM from 'react-dom'
// Root parent includes provider
import RootProvider from 'Root'
// Main component
import App from 'components/App'


ReactDOM.render(
  <RootProvider>
    <App />
  </RootProvider>
  , document.getElementById('root'))