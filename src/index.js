import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

let flats = [`Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Private room`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`];

ReactDom.render(
    <App flatDescription = {flats}/>,
    document.querySelector(`#root`)
);

