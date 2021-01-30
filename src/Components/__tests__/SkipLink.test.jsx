/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import SkipLink from '../SkipLink';

test('SkipLink', () => {
  const component = renderer.create(<SkipLink>Add to basket</SkipLink>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
