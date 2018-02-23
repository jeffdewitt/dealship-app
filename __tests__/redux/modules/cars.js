import * as actions from 'redux/modules/cars'
import * as types from 'redux/actionTypes'
import { CARS } from 'config/constants'

const carsReducer = actions.default
const defaultState = {
  cars: CARS,
  reqFeatures: {
    hasSunroof: false,
    isFourWheelDrive: false,
    hasLowMiles: false,
    hasPowerWindows: false,
    hasNavigation: false,
    hasHeatedSeats: false
  },
  wantFeatures: {
    hasSunroof: false,
    isFourWheelDrive: false,
    hasLowMiles: false,
    hasPowerWindows: false,
    hasNavigation: false,
    hasHeatedSeats: false
  }
}

describe('cars reducer', () => {
  it('should return the initial state', () => {
    expect(carsReducer(undefined, {})).toEqual(defaultState)
  })

  it('should handle TOGGLE_REQ_SUNROOF', () => {
    const specialState = {
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasSunroof: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_REQ_SUNROOF
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasSunroof: false
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasSunroof: true
      }
    })
  })

  it('should handle TOGGLE_WANT_SUNROOF', () => {
    const specialState = {
      ...defaultState,
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasSunroof: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_WANT_SUNROOF
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasSunroof: true
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasSunroof: false
      }
    })
  })

  it('should handle TOGGLE_REQ_FOURWHEEL', () => {
    const specialState = {
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        isFourWheelDrive: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_REQ_FOURWHEEL
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        isFourWheelDrive: false
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        isFourWheelDrive: true
      }
    })
  })

  it('should handle TOGGLE_WANT_FOURWHEEL', () => {
    const specialState = {
      ...defaultState,
      reqFeatures: {
        ...defaultState.reqFeatures,
        isFourWheelDrive: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_WANT_FOURWHEEL
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        isFourWheelDrive: true
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        isFourWheelDrive: false
      }
    })
  })

  it('should handle TOGGLE_REQ_NAVIGATION', () => {
    const specialState = {
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasNavigation: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_REQ_NAVIGATION
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasNavigation: false
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasNavigation: true
      }
    })
  })

  it('should handle TOGGLE_WANT_NAVIGATION', () => {
    const specialState = {
      ...defaultState,
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasNavigation: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_WANT_NAVIGATION
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasNavigation: true
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasNavigation: false
      }
    })
  })

  it('should handle TOGGLE_REQ_POWER_WINDOWS', () => {
    const specialState = {
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasPowerWindows: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_REQ_POWER_WINDOWS
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasPowerWindows: false
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasPowerWindows: true
      }
    })
  })

  it('should handle TOGGLE_WANT_POWER_WINDOWS', () => {
    const specialState = {
      ...defaultState,
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasPowerWindows: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_WANT_POWER_WINDOWS
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasPowerWindows: true
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasPowerWindows: false
      }
    })
  })

  it('should handle TOGGLE_REQ_LOW_MILAGE', () => {
    const specialState = {
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasLowMiles: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_REQ_LOW_MILAGE
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasLowMiles: false
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasLowMiles: true
      }
    })
  })

  it('should handle TOGGLE_WANT_HEATED_SEATS', () => {
    const specialState = {
      ...defaultState,
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasHeatedSeats: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_WANT_HEATED_SEATS
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasHeatedSeats: true
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasHeatedSeats: false
      }
    })
  })

  it('should handle TOGGLE_WANT_HEATED_SEATS', () => {
    const specialState = {
      ...defaultState,
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasHeatedSeats: true
      }
    }
    expect(
      carsReducer(specialState, {
        type: types.TOGGLE_WANT_HEATED_SEATS
      })
    ).toEqual({
      ...defaultState,
      wantFeatures: {
        ...defaultState.wantFeatures,
        hasHeatedSeats: true
      },
      reqFeatures: {
        ...defaultState.reqFeatures,
        hasHeatedSeats: false
      }
    })
  })
})
