import React from 'react'
import PropTypes from 'prop-types'
import { carsOptions, optionType, featureCheckbox, highlight, optionsContainer } from './styles.css'

CarsOptions.propTypes = {
  reqFeatures: PropTypes.shape({
    hasSunroof: PropTypes.bool.isRequired,
    isFourWheelDrive: PropTypes.bool.isRequired,
    hasLowMiles: PropTypes.bool.isRequired,
    hasNavigation: PropTypes.bool.isRequired,
    hasHeatedSeats: PropTypes.bool.isRequired,
    hasPowerWindows: PropTypes.bool.isRequired,
    hasColor: PropTypes.bool.isRequired,
    hasPrice: PropTypes.bool.isRequired
  }),
  wantFeatures: PropTypes.shape({
    hasSunroof: PropTypes.bool.isRequired,
    isFourWheelDrive: PropTypes.bool.isRequired,
    hasLowMiles: PropTypes.bool.isRequired,
    hasNavigation: PropTypes.bool.isRequired,
    hasHeatedSeats: PropTypes.bool.isRequired,
    hasPowerWindows: PropTypes.bool.isRequired,
    hasColor: PropTypes.bool.isRequired,
    hasPrice: PropTypes.bool.isRequired
  }),
  reqPrice: PropTypes.number.isRequired,
  wantPrice: PropTypes.number.isRequired,
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
  toggleWantNavigation: PropTypes.func.isRequired,
  toggleReqColor: PropTypes.func.isRequired,
  toggleWantColor: PropTypes.func.isRequired,
  updateReqColor: PropTypes.func.isRequired,
  updateWantColor: PropTypes.func.isRequired,
  toggleReqPrice: PropTypes.func.isRequired,
  toggleWantPrice: PropTypes.func.isRequired,
  updateReqPrice: PropTypes.func.isRequired,
  updateWantPrice: PropTypes.func.isRequired
}

export default function CarsOptions (props) {
  const colors = ['Black', 'White', 'Silver', 'Grey', 'Red']
  return (
    <div className={carsOptions}>
      <div className={optionsContainer}>
        <span className={optionType}>I NEED a car with:</span>
        <div>
          <FeatureCheckbox feature="Sunroof" hasFeature={props.reqFeatures.hasSunroof} updateFunc={props.toggleReqSunroof}/>
          <FeatureCheckbox feature="Four Wheel Drive" hasFeature={props.reqFeatures.isFourWheelDrive} updateFunc={props.toggleReqFourWheel}/>
          <FeatureCheckbox feature="Low Mileage" hasFeature={props.reqFeatures.hasLowMiles} updateFunc={props.toggleReqLowMilage}/>
          <FeatureCheckbox feature="Power Windows" hasFeature={props.reqFeatures.hasPowerWindows} updateFunc={props.toggleReqPowerWindows}/>
          <FeatureCheckbox feature="Navigation" hasFeature={props.reqFeatures.hasNavigation} updateFunc={props.toggleReqNavigation}/>
          <FeatureCheckbox feature="Heated Seats" hasFeature={props.reqFeatures.hasHeatedSeats} updateFunc={props.toggleReqHeatedSeats}/>
          <FeatureCheckbox feature="Color" hasFeature={props.reqFeatures.hasColor} updateFunc={props.toggleReqColor}>
            <select
              onChange={(e) => props.updateReqColor(e.target.value)}>
              {colors.map((color) => {
                return <option value={color} key={color}>{color}</option>
              })}
            </select>
          </FeatureCheckbox>
          <FeatureCheckbox feature="Price" hasFeature={props.reqFeatures.hasPrice} updateFunc={props.toggleReqPrice}>
            <input
              type="number"
              value={props.reqPrice}
              onChange={(e) => props.updateReqPrice(e.target.value)}/>
          </FeatureCheckbox>
        </div>
      </div>
      <div className={optionsContainer}>
        <span className={optionType}>{`I'd LIKE a car with:`}</span>
        <div>
          <FeatureCheckbox feature="Sunroof" hasFeature={props.wantFeatures.hasSunroof} updateFunc={props.toggleWantSunroof}/>
          <FeatureCheckbox feature="Four Wheel Drive" hasFeature={props.wantFeatures.isFourWheelDrive} updateFunc={props.toggleWantFourWheel}/>
          <FeatureCheckbox feature="Low Mileage" hasFeature={props.wantFeatures.hasLowMiles} updateFunc={props.toggleWantLowMilage}/>
          <FeatureCheckbox feature="Power Windows" hasFeature={props.wantFeatures.hasPowerWindows} updateFunc={props.toggleWantPowerWindows}/>
          <FeatureCheckbox feature="Navigation" hasFeature={props.wantFeatures.hasNavigation} updateFunc={props.toggleWantNavigation}/>
          <FeatureCheckbox feature="Heated Seats" hasFeature={props.wantFeatures.hasHeatedSeats} updateFunc={props.toggleWantHeatedSeats}/>
          <FeatureCheckbox feature="Color" hasFeature={props.wantFeatures.hasColor} updateFunc={props.toggleWantColor}>
            <select
              onChange={(e) => props.updateWantColor(e.target.value)}>
              {colors.map((color) => {
                return <option value={color} key={color}>{color}</option>
              })}
            </select>
          </FeatureCheckbox>
          <FeatureCheckbox feature="Price" hasFeature={props.wantFeatures.hasPrice} updateFunc={props.toggleWantPrice}>
            <input
              type="number"
              value={props.wantPrice}
              onChange={(e) => props.updateWantPrice(e.target.value)}/>
          </FeatureCheckbox>
        </div>
      </div>
    </div>
  )
}

FeatureCheckbox.propTypes = {
  feature: PropTypes.string.isRequired,
  hasFeature: PropTypes.bool.isRequired,
  updateFunc: PropTypes.func.isRequired,
  children: PropTypes.object
}

export function FeatureCheckbox ({feature, hasFeature, updateFunc, children}) {
  return <span className={`${featureCheckbox} ${(hasFeature) ? highlight : ''}`}>
    <input type="checkbox" checked={hasFeature} onChange={updateFunc}/>
    <label>{feature}</label>
    {children}
  </span>
}
