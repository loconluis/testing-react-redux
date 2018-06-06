import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'
// Main component
import App from 'components/App'

// creating store with states of reducers
const store = createStore(reducers, {})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))