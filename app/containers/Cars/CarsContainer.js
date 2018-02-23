import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CarsList, CarsOptions } from 'components'
import * as carsActionListeners from 'redux/modules/cars'
import { carsContainer } from './styles.css'

class CarsContainer extends React.Component {
  static propTypes = {
    cars: PropTypes.array.isRequired,
    reqFeatures: PropTypes.object.isRequired,
    wantFeatures: PropTypes.object.isRequired
  }

  render () {
    return (
      <div className={carsContainer}>
        <CarsOptions {...this.props}/>
        <CarsList cars={this.props.cars}/>
      </div>
    )
  }
}

function mapStateToProps ({cars}) {
  return {
    cars: cars.cars,
    reqFeatures: cars.reqFeatures,
    wantFeatures: cars.wantFeatures
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(carsActionListeners, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer)
