/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import GridLayout from '../GridLayout';

test('GridLayout', () => {
  const component = renderer.create(<GridLayout>Component</GridLayout>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
