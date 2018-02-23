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
    const cars = this.props.cars.filter((car) => {
      for (const feature in this.props.reqFeatures) {
        if (this.props.reqFeatures[feature] && !car[feature]) { return false }
      }

      let hasOptional = false

      for (const feature in this.props.wantFeatures) {
        if (this.props.wantFeatures[feature]) {
          hasOptional = true
          if (car[feature]) { return true }
        }
      }

      return !hasOptional
    })

    return (
      <div className={carsContainer}>
        <CarsOptions {...this.props}/>
        <CarsList cars={cars}/>
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
