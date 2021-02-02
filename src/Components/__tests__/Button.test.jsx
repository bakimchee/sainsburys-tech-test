/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Button, { TransparentButton } from '../Button';

test('Button', () => {
  const component = renderer.create(<Button>Add to basket</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button - Small', () => {
  const component = renderer.create(<Button small>Add to basket</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', 'small');
});

test('Button - Full Width', () => {
  const component = renderer.create(<Button fullWidth>Add to basket</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '100%');
});

test('Button - Outline', () => {
  const component = renderer.create(<Button outlined>Add to basket</Button>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', 'transparent');
  expect(tree).toHaveStyleRule('border', 'solid 4px #F06C00');
});

test('Transparent Button', () => {
  const component = renderer.create(<TransparentButton>Add to basket</TransparentButton>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('background-color', 'transparent');
});
