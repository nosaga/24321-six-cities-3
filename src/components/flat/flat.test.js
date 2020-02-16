import React from 'react';
import renderer from 'react-test-renderer';
import Flat from './flat.jsx';

it(`Should render Flat compoenent correctly`, () => {
  const tree = renderer
    .create(<Flat flat={`cozy apartments`} onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
