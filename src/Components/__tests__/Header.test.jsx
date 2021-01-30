/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

test('Header', () => {
  const component = renderer.create(<Header>Add to basket</Header>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
