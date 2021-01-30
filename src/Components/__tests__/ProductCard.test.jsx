/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../ProductCard';
import 'jest-styled-components';

test('ProductCard', () => {
  const component = renderer.create(<ProductCard>Add to basket</ProductCard>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
