import React from 'react'
import PropTypes from 'prop-types'
import { carsOptions, optionType, featureCheckbox, highlight } from './styles.css'

CarsOptions.propTypes = {
  reqFeatures: PropTypes.shape({
    hasSunroof: PropTypes.bool.isRequired,
    isFourWheelDrive: PropTypes.bool.isRequired,
    hasLowMiles: PropTypes.bool.isRequired,
    hasNavigation: PropTypes.bool.isRequired,
    hasHeatedSeats: PropTypes.bool.isRequired,
    hasPowerWindows: PropTypes.bool.isRequired
  }),
  wantFeatures: PropTypes.shape({
    hasSunroof: PropTypes.bool.isRequired,
    isFourWheelDrive: PropTypes.bool.isRequired,
    hasLowMiles: PropTypes.bool.isRequired,
    hasNavigation: PropTypes.bool.isRequired,
    hasHeatedSeats: PropTypes.bool.isRequired,
    hasPowerWindows: PropTypes.bool.isRequired
  }),
  toggleReqSunroof: PropTypes.func.isRequired,
  toggleWantSunroof: PropTypes.func.isRequired,
  toggleReqLowMilage: PropTypes.func.isRequired,
  toggleWantLowMilage: PropTypes.func.isRequired,
  toggleReqFourWheel: PropTypes.func.isRequired,
  toggleWantFourWheel: PropTypes.func.isRequired,
  toggleReqHeatedSeats: PropTypes.func.isRequired,
  toggleWantHeatedSeats: PropTypes.func.isRequired,
  toggleReqPowerWindows: PropTypes.func.isRequired,
  toggleWantPowerWindows: PropTypes.func.isRequired,
  toggleReqNavigation: PropTypes.func.isRequired,
  toggleWantNavigation: PropTypes.func.isRequired
}

export default function CarsOptions (props) {
  return (
    <div className={carsOptions}>
      <div>
        <span className={optionType}>I NEED a car with:</span>
        <div>
          <FeatureCheckbox feature="Sunroof" hasFeature={props.reqFeatures.hasSunroof} updateFunc={props.toggleReqSunroof}/>
          <FeatureCheckbox feature="Four Wheel Drive" hasFeature={props.reqFeatures.isFourWheelDrive} updateFunc={props.toggleReqFourWheel}/>
          <FeatureCheckbox feature="Low Mileage" hasFeature={props.reqFeatures.hasLowMiles} updateFunc={props.toggleReqLowMilage}/>
          <FeatureCheckbox feature="Power Windows" hasFeature={props.reqFeatures.hasPowerWindows} updateFunc={props.toggleReqPowerWindows}/>
          <FeatureCheckbox feature="Navigation" hasFeature={props.reqFeatures.hasNavigation} updateFunc={props.toggleReqNavigation}/>
          <FeatureCheckbox feature="Heated Seats" hasFeature={props.reqFeatures.hasHeatedSeats} updateFunc={props.toggleReqHeatedSeats}/>
        </div>
      </div>
      <div>
        <span className={optionType}>I would LIKE a car with:</span>
        <div>
          <FeatureCheckbox feature="Sunroof" hasFeature={props.wantFeatures.hasSunroof} updateFunc={props.toggleWantSunroof}/>
          <FeatureCheckbox feature="Four Wheel Drive" hasFeature={props.wantFeatures.isFourWheelDrive} updateFunc={props.toggleWantFourWheel}/>
          <FeatureCheckbox feature="Low Mileage" hasFeature={props.wantFeatures.hasLowMiles} updateFunc={props.toggleWantLowMilage}/>
          <FeatureCheckbox feature="Power Windows" hasFeature={props.wantFeatures.hasPowerWindows} updateFunc={props.toggleWantPowerWindows}/>
          <FeatureCheckbox feature="Navigation" hasFeature={props.wantFeatures.hasNavigation} updateFunc={props.toggleWantNavigation}/>
          <FeatureCheckbox feature="Heated Seats" hasFeature={props.wantFeatures.hasHeatedSeats} updateFunc={props.toggleWantHeatedSeats}/>
        </div>
      </div>
    </div>
  )
}

FeatureCheckbox.propTypes = {
  feature: PropTypes.string.isRequired,
  hasFeature: PropTypes.bool.isRequired,
  updateFunc: PropTypes.func.isRequired
}

function FeatureCheckbox ({feature, hasFeature, updateFunc}) {
  return <span className={`${featureCheckbox} ${(hasFeature) ? highlight : ''}`}>
    <input type="checkbox" checked={hasFeature} onChange={updateFunc}/>
    <label>{feature}</label>
  </span>
}
