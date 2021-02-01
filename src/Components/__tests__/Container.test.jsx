/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../Container';

test('Container', () => {
  const component = renderer.create(<Container>Content</Container>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
