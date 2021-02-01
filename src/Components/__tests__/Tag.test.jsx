/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Tag from '../Tag';

test('Tag', () => {
  const component = renderer.create(<Tag>3</Tag>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
