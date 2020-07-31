import React from 'react';
import PropTypes from 'prop-types';

const Description = (props) => {
  return <p>To ja, {props.name}.</p>;
};
Description.defaultProps = {
  name: 'Pastek',
};
Description.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Description;
