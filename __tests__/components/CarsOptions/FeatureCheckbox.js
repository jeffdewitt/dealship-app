import React from 'react'
import { FeatureCheckbox } from '../../../app/components/CarsOptions/CarsOptions'
import { shallow } from 'enzyme'

test('FeatureCheckbox changes when clicked', () => {
  let testVar = false
  let testVar2 = false
  const testFunc = () => {
    testVar2 = true
  }
  const component = shallow(<FeatureCheckbox feature="Navigation" hasFeature={testVar} updateFunc={testFunc}/>)
  let checkbox = component.find({ type: 'checkbox' })

  expect(checkbox.props().checked).toEqual(false)

  checkbox.simulate('change')

  expect(testVar2).toEqual(true)
})
