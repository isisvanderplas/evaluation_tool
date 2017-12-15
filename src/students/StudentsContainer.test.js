import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import StudentsContainer from './StudentsContainer'
import Title from './../components/Title'

chai.use(chaiEnzyme())

describe('<StudentsContainer />', () => {
  const container = shallow(<StudentsContainer students={[]} />)

  it('is wrapped in a div with class name "students"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('students')
  })

  it('contains a Title', () => {
    expect(container).to.have.descendants(Title)
  })

  it('sets the Title to "Students"', () => {
    expect(container).to.contain(<Title content="Students" />)
  })
})
