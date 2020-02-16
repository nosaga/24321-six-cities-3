import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Flat from './flat.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();
  const flat = shallow(
      <Flat
        flat={`cozy apartment`}
        onTitleClick={onTitleClick}
      />
  );
  const title = flat.find(`.place-card__name`);
  title.props().onClick();
  expect(onTitleClick.mock.calls.length).toBe(1);
});
