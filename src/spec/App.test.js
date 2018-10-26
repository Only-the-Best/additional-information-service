import { shallow, mount, render } from 'enzyme';
import React from 'react';

import App from '../App.js';
import Expenses from '../components/Expenses.js';
import Home from '../components/Home.js';
import Mortgage from '../components/Mortgage.js';
import Neighborhood from '../components/Neighborhood.js';
import Price from '../components/Price.js';
import Schools from '../components/Schools.js';


describe('<App />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('it should exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should contain the Expenses, Price, Mortgage, Home, Neighborhood, and Schools components', () => {
    expect(wrapper.find('Expenses').length).toBe(1);
    expect(wrapper.find('Price').length).toBe(1);
    expect(wrapper.find('Mortgage').length).toBe(1);
    expect(wrapper.find('Home').length).toBe(1);
    expect(wrapper.find('Neighborhood').length).toBe(1);
    expect(wrapper.find('Schools').length).toBe(1);
  });

});


describe('<Expenses />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('should expand on click', () => {
    wrapper.find('#expenses-header').simulate('click');
    expect(wrapper.find('#expenses-active').length).toBe(1);
  });

  test('if expanded, should collapse on click', () => {
    wrapper.find('#expenses-header').simulate('click');
    expect(wrapper.find('#expenses-active').length).toBe(1);
    wrapper.find('#expenses-header').simulate('click');
    expect(wrapper.find('#expenses-active').length).toBe(0);
  });

});

describe('<Home />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('should expand on click', () => {
    wrapper.find('#home-header').simulate('click');
    expect(wrapper.find('#home-active').length).toBe(1);
  });

  test('if expanded, should collapse on click', () => {
    wrapper.find('#home-header').simulate('click');
    expect(wrapper.find('#home-active').length).toBe(1);
    wrapper.find('#home-header').simulate('click');
    expect(wrapper.find('#home-active').length).toBe(0);
  });

  test('clicking the "Zestimate History & Details" should expand to show more info', () => {
    wrapper.find('#home-header').simulate('click');
    wrapper.find('#zestimate-history-title').simulate('click');
    expect(wrapper.find('#expand-zestimate-details-container').length).toBe(1);
  });

  test('clicking the "Zestimate History & Details" should hide the link', () => {
    wrapper.find('#home-header').simulate('click');
    wrapper.find('#zestimate-history-title').simulate('click');
    expect(wrapper.find('#zestimate-history-title').length).toBe(0);
  });

  //change these to components, nest describe blocks?

});

describe('<Mortgage />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('should expand on click', () => {
    wrapper.find('#mortgage-header').simulate('click');
    expect(wrapper.find('#mortgage-active').length).toBe(1);
  });

  test('if expanded, should collapse on click', () => {
    wrapper.find('#mortgage-header').simulate('click');
    expect(wrapper.find('#mortgage-active').length).toBe(1);
    wrapper.find('#mortgage-header').simulate('click');
    expect(wrapper.find('#mortgage-active').length).toBe(0);
  });

});

describe('<Neighborhood />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('should expand on click', () => {
    wrapper.find('#neighborhood-header').simulate('click');
    expect(wrapper.find('#neighborhood-active').length).toBe(1);
  });

  test('if expanded, should collapse on click', () => {
    wrapper.find('#neighborhood-header').simulate('click');
    expect(wrapper.find('#neighborhood-active').length).toBe(1);
    wrapper.find('#neighborhood-header').simulate('click');
    expect(wrapper.find('#neighborhood-active').length).toBe(0);
  });

});

describe('<Price />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('should expand on click', () => {
    wrapper.find('#price-header').simulate('click');
    expect(wrapper.find('#price-active').length).toBe(1);
  });

  test('if expanded, should collapse on click', () => {
    wrapper.find('#price-header').simulate('click');
    expect(wrapper.find('#price-active').length).toBe(1);
    wrapper.find('#price-header').simulate('click');
    expect(wrapper.find('#price-active').length).toBe(0);
  });

});

describe('<Schools />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('should expand on click', () => {
    wrapper.find('#schools-header').simulate('click');
    expect(wrapper.find('#schools-active').length).toBe(1);
  });

  test('if expanded, should collapse on click', () => {
    wrapper.find('#schools-header').simulate('click');
    expect(wrapper.find('#schools-active').length).toBe(1);
    wrapper.find('#schools-header').simulate('click');
    expect(wrapper.find('#schools-active').length).toBe(0);
  });

});