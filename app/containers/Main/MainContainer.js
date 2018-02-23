import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class MainContainer extends React.Component {
  render () {
    return <div>
      Hello World!
    </div>
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({}, dispatch)
)(MainContainer)
