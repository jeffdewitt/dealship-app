import { filterCars } from 'helpers/utils'
import { CARS } from 'config/constants'

const defaultFilter = {
  reqFeatures: {
    hasSunroof: false,
    isFourWheelDrive: false,
    hasLowMiles: false,
    hasPowerWindows: false,
    hasNavigation: false,
    hasHeatedSeats: false,
    hasColor: false,
    hasPrice: false
  },
  wantFeatures: {
    hasSunroof: false,
    isFourWheelDrive: false,
    hasLowMiles: false,
    hasPowerWindows: false,
    hasNavigation: false,
    hasHeatedSeats: false,
    hasColor: false,
    hasPrice: false
  },
  reqColor: 'Black',
  wantColor: 'Black',
  reqPrice: 15000,
  wantPrice: 15000
}

describe('filter tests', () => {
  it('should pass with empty filter', () => {
    expect(filterCars(CARS[0], defaultFilter)).toEqual(true)
    expect(filterCars(CARS[1], defaultFilter)).toEqual(true)
    expect(filterCars(CARS[2], defaultFilter)).toEqual(true)
    expect(filterCars(CARS[3], defaultFilter)).toEqual(true)
  })

  it('should filter on multiple REQ feature', () => {
    const filter = {
      ...defaultFilter,
      reqFeatures: {
        ...defaultFilter.reqFeatures,
        hasLowMiles: true,
        hasNavigation: true
      }
    }

    expect(filterCars(CARS[0], filter)).toEqual(true)
    expect(filterCars(CARS[1], filter)).toEqual(false)
  })

  it('should filter on Req Price', () => {
    const filter = {
      ...defaultFilter,
      reqFeatures: {
        ...defaultFilter.reqFeatures,
        hasPrice: true
      },
      reqPrice: 16000
    }

    expect(filterCars(CARS[0], filter)).toEqual(false)
    expect(filterCars(CARS[3], filter)).toEqual(true)
  })

  it('should filter on Req Price and Color', () => {
    const filter = {
      ...defaultFilter,
      reqFeatures: {
        ...defaultFilter.reqFeatures,
        hasPrice: true,
        hasColor: true
      },
      reqPrice: 20000,
      reqColor: 'Red'
    }

    expect(filterCars(CARS[5], filter)).toEqual(true)
    expect(filterCars(CARS[6], filter)).toEqual(false)
  })

  it('should filter on Req feature and Wanted features', () => {
    const filter = {
      ...defaultFilter,
      reqFeatures: {
        ...defaultFilter.reqFeatures,
        hasPowerWindows: true
      },
      wantFeatures: {
        ...defaultFilter.wantFeatures,
        hasNavigation: true,
        isFourWheelDrive: true
      }
    }

    expect(filterCars(CARS[0], filter)).toEqual(false)
    expect(filterCars(CARS[1], filter)).toEqual(true)
    expect(filterCars(CARS[3], filter)).toEqual(false)
  })

  it('should filter on Wanted Color and wanted nav', () => {
    const filter = {
      ...defaultFilter,
      wantFeatures: {
        ...defaultFilter.wantFeatures,
        hasNavigation: true,
        hasColor: true
      },
      reqColor: 'Red'
    }

    expect(filterCars(CARS[5], filter)).toEqual(true)
    expect(filterCars(CARS[0], filter)).toEqual(true)
    expect(filterCars(CARS[1], filter)).toEqual(false)
  })
})
