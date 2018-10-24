import { shallow, mount, render } from 'enzyme';
import React from 'react';

import App from '../App.js';

describe('<App />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('it should exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should contain the Value, Price, Mortgage, Home, Neighborhood, and Schools components', () => {
    expect(wrapper.find('Value').length).toBe(1);
    expect(wrapper.find('Price').length).toBe(1);
    expect(wrapper.find('Mortgage').length).toBe(1);
    expect(wrapper.find('Home').length).toBe(1);
    expect(wrapper.find('Neighborhood').length).toBe(1);
    expect(wrapper.find('Schools').length).toBe(1);
  });

});
