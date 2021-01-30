/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ThemeSelector from './ThemeSelector';

test('ThemeSelector', () => {
  const component = renderer.create(<ThemeSelector>Add to basket</ThemeSelector>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
