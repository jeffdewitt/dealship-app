import * as types from 'redux/actionTypes'
import { CARS } from 'config/constants'

export function toggleReqSunroof () {
  return {
    type: types.TOGGLE_REQ_SUNROOF
  }
}

export function toggleWantSunroof () {
  return {
    type: types.TOGGLE_WANT_SUNROOF
  }
}

export function toggleReqFourWheel () {
  return {
    type: types.TOGGLE_REQ_FOURWHEEL
  }
}

export function toggleWantFourWheel () {
  return {
    type: types.TOGGLE_WANT_FOURWHEEL
  }
}

export function toggleReqPowerWindows () {
  return {
    type: types.TOGGLE_REQ_POWER_WINDOWS
  }
}

export function toggleWantPowerWindows () {
  return {
    type: types.TOGGLE_WANT_POWER_WINDOWS
  }
}

export function toggleReqNavigation () {
  return {
    type: types.TOGGLE_REQ_NAVIGATION
  }
}

export function toggleWantNavigation () {
  return {
    type: types.TOGGLE_WANT_NAVIGATION
  }
}

export function toggleReqHeatedSeats () {
  return {
    type: types.TOGGLE_REQ_HEADED_SEATS
  }
}

export function toggleWantHeatedSeats () {
  return {
    type: types.TOGGLE_WANT_HEATED_SEATS
  }
}

export function toggleReqLowMilage () {
  return {
    type: types.TOGGLE_REQ_LOW_MILAGE
  }
}

export function toggleWantLowMilage () {
  return {
    type: types.TOGGLE_WANT_LOW_MILAGE
  }
}

const initialState = {
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

export default function cars (state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_REQ_SUNROOF :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasSunroof: !state.reqFeatures.hasSunroof
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasSunroof: false
        }
      }
    case types.TOGGLE_WANT_SUNROOF :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasSunroof: false
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasSunroof: !state.wantFeatures.hasSunroof
        }
      }
    case types.TOGGLE_REQ_FOURWHEEL :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          isFourWheelDrive: !state.reqFeatures.isFourWheelDrive
        },
        wantFeatures: {
          ...state.wantFeatures,
          isFourWheelDrive: false
        }
      }
    case types.TOGGLE_WANT_FOURWHEEL :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          isFourWheelDrive: false
        },
        wantFeatures: {
          ...state.wantFeatures,
          isFourWheelDrive: !state.wantFeatures.isFourWheelDrive
        }
      }
    case types.TOGGLE_REQ_NAVIGATION :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasNavigation: !state.reqFeatures.hasNavigation
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasNavigation: false
        }
      }
    case types.TOGGLE_WANT_NAVIGATION :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasNavigation: false
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasNavigation: !state.wantFeatures.hasNavigation
        }
      }
    case types.TOGGLE_REQ_HEADED_SEATS :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasHeatedSeats: !state.reqFeatures.hasHeatedSeats
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasHeatedSeats: false
        }
      }
    case types.TOGGLE_WANT_HEATED_SEATS :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasHeatedSeats: false
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasHeatedSeats: !state.wantFeatures.hasHeatedSeats
        }
      }
    case types.TOGGLE_REQ_POWER_WINDOWS :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasPowerWindows: !state.reqFeatures.hasPowerWindows
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasPowerWindows: false
        }
      }
    case types.TOGGLE_WANT_POWER_WINDOWS :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasPowerWindows: false
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasPowerWindows: !state.wantFeatures.hasPowerWindows
        }
      }
    case types.TOGGLE_REQ_LOW_MILAGE :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasLowMiles: !state.reqFeatures.hasLowMiles
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasLowMiles: false
        }
      }
    case types.TOGGLE_WANT_LOW_MILAGE :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasLowMiles: false
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasLowMiles: !state.wantFeatures.hasLowMiles
        }
      }
    default :
      return state
  }
}
