import * as types from 'redux/actionTypes'
import { fromJS } from 'immutable'
import { CARS } from 'config/constants'

const initialState = fromJS({
  cars: CARS
})

export default function cars (state = initialState, action) {
  switch (action.type) {
    default :
      return state
  }
}
