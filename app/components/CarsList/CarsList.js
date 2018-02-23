import React from 'react'
import PropTypes from 'prop-types'
import { carItem, carList, featuresContainer, sorry } from './styles.css'

CarsList.propTypes = {
  cars: PropTypes.array.isRequired
}

export default function CarsList ({cars}) {
  return (
    <div>
      <ul className={carList}>
        {cars.length
          ? cars.map((val) => {
            return <li className={carItem} key={val._id}>
              <h3>{`${val.year} ${val.make} ${val.model}`}</h3>
              <div>
                <span>{`Color: ${val.color}`}</span>
                <span>{`Price: $${val.price}`}</span>
              </div>
              <div className={featuresContainer}>
                {displayFeature('Sunroof', val.hasSunroof)}
                {displayFeature('Four Wheel Drive', val.isFourWheelDrive)}
                {displayFeature('Low Mileage', val.hasLowMiles)}
                {displayFeature('Power Windows', val.hasPowerWindows)}
                {displayFeature('Navigation', val.hasNavigation)}
                {displayFeature('Heated Seats', val.hasHeatedSeats)}
              </div>
            </li>
          })
          : <h3 className={sorry}>Blast, it looks like we do not have any cars that match you criteria</h3>}
      </ul>
    </div>
  )
}

function displayFeature (feature, hasFeature) {
  return <span>{feature}: {hasFeature ? <strong>YES!</strong> : 'no'}</span>
}
