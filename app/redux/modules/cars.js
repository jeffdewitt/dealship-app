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

export function toggleReqColor () {
  return {
    type: types.TOGGLE_REQ_COLOR
  }
}

export function toggleWantColor () {
  return {
    type: types.TOGGLE_WANT_COLOR
  }
}

export function updateReqColor (color) {
  return {
    type: types.UPDATE_REQ_COLOR,
    color
  }
}

export function updateWantColor (color) {
  return {
    type: types.UPDATE_WANT_COLOR,
    color
  }
}

export function toggleReqPrice () {
  return {
    type: types.TOGGLE_REQ_PRICE
  }
}

export function toggleWantPrice () {
  return {
    type: types.TOGGLE_WANT_PRICE
  }
}

export function updateReqPrice (price) {
  return {
    type: types.UPDATE_REQ_PRICE,
    price: parseInt(price)
  }
}

export function updateWantPrice (price) {
  return {
    type: types.UPDATE_WANT_PRICE,
    price: parseInt(price)
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
    case types.TOGGLE_REQ_COLOR :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasColor: !state.reqFeatures.hasColor
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasColor: false
        }
      }
    case types.TOGGLE_WANT_COLOR :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasColor: false
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasColor: !state.wantFeatures.hasColor
        }
      }
    case types.UPDATE_REQ_COLOR :
      return {
        ...state,
        reqColor: action.color
      }
    case types.UPDATE_WANT_COLOR :
      return {
        ...state,
        wantColor: action.color
      }
    case types.TOGGLE_REQ_PRICE :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasPrice: !state.reqFeatures.hasPrice
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasPrice: false
        }
      }
    case types.TOGGLE_WANT_PRICE :
      return {
        ...state,
        reqFeatures: {
          ...state.reqFeatures,
          hasPrice: false
        },
        wantFeatures: {
          ...state.wantFeatures,
          hasPrice: !state.wantFeatures.hasPrice
        }
      }
    case types.UPDATE_REQ_PRICE :
      return {
        ...state,
        reqPrice: action.price
      }
    case types.UPDATE_WANT_PRICE :
      return {
        ...state,
        wantPrice: action.price
      }
    default :
      return state
  }
}
