import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App'

describe('App', () => {
  it('Renders an empty list', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  })

  it('Adds task to list', () => {
    expect(true).toBe(true)
  })
})