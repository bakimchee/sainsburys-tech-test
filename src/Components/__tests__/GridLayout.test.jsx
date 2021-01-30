/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import GridLayout from '../GridLayout';

test('GridLayout', () => {
  const component = renderer.create(<GridLayout>Add to basket</GridLayout>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
