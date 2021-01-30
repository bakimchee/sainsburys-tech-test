/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

test('Button', () => {
  const component = renderer.create(<Button>Add to basket</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
