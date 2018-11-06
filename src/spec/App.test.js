import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import gql from 'graphql-tag';

import { PreQuery } from '../App.js';
import App from '../App.js';
import Home from '../components/Home.js';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



const curry = require('ramda/src/curry');

const mocks = [
  {
    request: {
      query: gql`
        query Current($num: [Int]!) {
          getSome(num: $num) {
            address
            city
            zestimate
            beds
            baths
            sqFt
            status
          }
        }
      `,
      variables: {
        num: 1,
      },
    },

    result: {
      data: {
        getSome: [
          {
            address: '82581 Howe Heights',
            city: 'West Juvenalmouth',
            zestimate: [
              722016,
              732971,
              736976,
              746323,
              760590,
              767353,
              776627,
              787130,
              796833,
              797814,
            ],
            beds: 4,
            baths: 3.5,
            sqFt: 1180,
            status: 'Sold',
          },
        ],
      },
    },
  },
];

const flushPromises = () => new Promise(resolve => setImmediate(resolve));
const sel = curry((dataTestId, wrapper) => wrapper.find(`[data-test="${dataTestId}"]`));

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PreQuery />
      </MockedProvider>,
    );
  });

  test('it should exist', () => {
    (async () => {
      await flushPromises();
      wrapper.update();
      expect(wrapper.exists()).toBe(true);
    })();
  });


});

describe('<Home />', () => {

  const dummy = {
    getSome: [{
    address: "090 Dalton Gateway",
    baths: 3,
    beds: 3,
    city: "Stephenport",
    sqFt: 1190,
    status: "For Sale",
    taxAssessment: 746741.213,
    zestimate:  [298761, 295570, 288517, 290031, 282068, 278264, 278341, 270733, 270466, 261592, 258745]
  }]};


  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App current={dummy} num={1} />
      </MockedProvider>
    );
  });

  test('should expand on click', async () => {
      await flushPromises();
        wrapper.update();
      wrapper.find('#home-header').simulate('click');
      expect(wrapper.find('#home-active').length).toBe(1);
  });

  test('if expanded, should collapse on click', async () => {
      await flushPromises();
      wrapper.update();
      wrapper.find('#home-header').simulate('click');
      expect(wrapper.find('#home-active').length).toBe(1);
      wrapper.find('#home-header').simulate('click');
      expect(wrapper.find('#home-active').length).toBe(0);
  });

  test('clicking the "Zestimate History & Details" should hide the link', async () => {
      await flushPromises();
      wrapper.update();
      wrapper.find('#home-header').simulate('click');
      wrapper.find('#zestimate-history-title').simulate('click');
      expect(wrapper.find('#zestimate-history-title').length).toBe(0);
  });

  test('clicking on the "Comparable homes" Inside the Zestimate expands to show more content', async () => {
        await flushPromises();
        wrapper.update();
        wrapper.find('#home-header').simulate('click');
        wrapper.find('#zestimate-history-title').simulate('click');
        expect(sel('comparable').length).toBe(0);
        wrapper.find('#expand-comparable-homes').simulate('click');
        expect(sel('comparable').length).toBe(1);
  });

  test('clicking on the "Comparable homes" Inside the Zestimate should hide content if it' +
    ' is currently expanded', async () => {
      await flushPromises();
      wrapper.update();
      wrapper.find('#home-header').simulate('click');
      wrapper.find('#zestimate-history-title').simulate('click');
      expect(sel('comparable').length).toBe(1);
      wrapper.find('#expand-comparable-homes').simulate('click');
      expect(sel('comparable').length).toBe(0);
  });

  test('clicking on the "Local tax assessments" Inside the Zestimate expands to show more' +
    ' content', async () => {
      await flushPromises();
      wrapper.update();
      wrapper.find('#home-header').simulate('click');
      wrapper.find('#zestimate-history-title').simulate('click');
      expect(sel('localtax').length).toBe(0);
      wrapper.find('#expand-tax-assessment').simulate('click');
      expect(sel('localtax').length).toBe(1);
  });

  test('clicking on the "Local tax assessments" Inside the Zestimate should hide content if it' +
    ' is currently expanded', async () => {
      await flushPromises();
      wrapper.update();
      wrapper.find('#home-header').simulate('click');
      wrapper.find('#zestimate-history-title').simulate('click');
      expect(sel('localtax').length).toBe(1);
      wrapper.find('#expand-tax-assessment').simulate('click');
      expect(sel('localtax').length).toBe(0);
  });

  test('clicking on the "Market appreciation" Inside the Zestimate expands to show more' +
    ' content', async () => {
      await flushPromises();
      wrapper.update();
      wrapper.find('#home-header').simulate('click');
      wrapper.find('#zestimate-history-title').simulate('click');
      expect(sel('market').length).toBe(0);
      wrapper.find('#expand-market').simulate('click');
      expect(sel('market').length).toBe(1);
  });

  test('clicking on the "Market appreciation" Inside the Zestimate should hide content if it' +
    ' is currently expanded', async () =>  {
      await flushPromises();
      wrapper.update();
      wrapper.find('#home-header').simulate('click');
      wrapper.find('#zestimate-history-title').simulate('click');
      expect(sel('market').length).toBe(1);
      wrapper.find('#expand-market').simulate('click');
      expect(sel('market').length).toBe(0);
  });

  test('clicking on the "Local sale prices" Inside the Zestimate expands to show more' +
    ' content', async () => {
      await flushPromises();
      wrapper.update();
      wrapper.find('#home-header').simulate('click');
      wrapper.find('#zestimate-history-title').simulate('click');
      expect(sel('localsale').length).toBe(0);
      wrapper.find('#expand-local-sale').simulate('click');
      expect(sel('localsale').length).toBe(1);
  });

  test('clicking on the "Local sale prices" Inside the Zestimate should hide content if it is' +
    ' currently expanded', async () => {
      await flushPromises();
      wrapper.update();
      wrapper.find('#home-header').simulate('click');
      wrapper.find('#zestimate-history-title').simulate('click');
      expect(sel('localsale').length).toBe(1);
      wrapper.find('#expand-local-sale').simulate('click');
      expect(sel('localsale').length).toBe(0);
  });


  test('clicking the year selector on the graph should change the view', async () => {
      await flushPromises();
      wrapper.update();
      wrapper.find('#home-header').simulate('click');
      wrapper.find('#zestimate-history-title').simulate('click');
      expect(wrapper.find('#5-year'))
        .hasClass('selected')
        .toBe(false);
      wrapper.find('#5-year').simulate('click');
      expect(wrapper.find('#5-year'))
        .hasClass('selected')
        .toBe(true);
  });
});

//
// describe('ZestimateDetails', () => {
//
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount()
//   });
//
//   test('clicking the "Zestimate History & Details" should expand to show more info', async () => {
//
//     wrapper.find('#home-header').simulate('click');
//     wrapper.find('#zestimate-history-title').simulate('click');
//     await flushPromises();
//     wrapper.update();
//     expect(wrapper.find('#expand-zestimate-details-container').length).toBe(1);
//   });
//
// });





