/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Checkout from '../Checkout';

test('Checkout', () => {
  const component = renderer.create(<Checkout />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
