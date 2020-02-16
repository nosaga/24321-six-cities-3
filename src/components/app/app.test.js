import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`Should render App compoenent correctly`, () => {
  const tree = renderer
    .create(<App flatDescription={[`Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Private room`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
