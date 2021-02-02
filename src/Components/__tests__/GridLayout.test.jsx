/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import GridLayout, { Grid } from '../GridLayout';

test('Grid', () => {
  const component = renderer.create(<Grid>Component</Grid>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('display', 'grid', {
    media: '(min-width: 640px)',
  });
});

test('Grid Layout', () => {
  const component = renderer.create(<GridLayout>Grid</GridLayout>);
  const tree = component.toJSON();
  expect(tree.props.id).toEqual('main');
});
