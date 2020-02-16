import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Should render Main compoenent correctly`, () => {
  const tree = renderer
    .create(<Main flatDescription={[`Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Private room`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
