import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {flatDescription} = props;

  return (
    <Main flatDescription={flatDescription}/>
  );
};

App.propTypes = {
  flatDescription: PropTypes.array.isRequired
};

export default App;
