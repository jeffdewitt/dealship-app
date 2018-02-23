import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CarsContainer } from 'containers'
import { mainContainer } from './styles.css'

class MainContainer extends React.Component {
  render () {
    return <Router>
      <div className={mainContainer}>
        <h2>{`Crazy Eddie's Cars`}</h2>
        <p>Cars, Crazy, and Deals in Various Combination</p>
        <Switch>
          <Route exact={true} path="/" component={CarsContainer}/>
        </Switch>
      </div>
    </Router>
  }
}

export default connect()(MainContainer)
