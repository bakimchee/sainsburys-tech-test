/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

test('Footer', () => {
  const component = renderer.create(<Footer>Add to basket</Footer>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
