import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CarsList, CarsOptions } from 'components'
import * as carsActionListeners from 'redux/modules/cars'
import { carsContainer } from './styles.css'
import { filterCars } from 'helpers/utils'

class CarsContainer extends React.Component {
  static propTypes = {
    cars: PropTypes.array.isRequired,
    reqFeatures: PropTypes.object.isRequired,
    wantFeatures: PropTypes.object.isRequired,
    reqColor: PropTypes.string.isRequired,
    wantColor: PropTypes.string.isRequired,
    reqPrice: PropTypes.number.isRequired,
    wantPrice: PropTypes.number.isRequired
  }

  render () {
    const cars = this.props.cars.filter((car) => {
      return filterCars(car, this.props)
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
    wantFeatures: cars.wantFeatures,
    reqColor: cars.reqColor,
    wantColor: cars.wantColor,
    reqPrice: cars.reqPrice,
    wantPrice: cars.wantPrice
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(carsActionListeners, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer)
