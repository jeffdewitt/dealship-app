import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from 'redux/modules'
import { MainContainer } from 'containers'

const store = createStore(combineReducers(reducers), compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('app')
)
