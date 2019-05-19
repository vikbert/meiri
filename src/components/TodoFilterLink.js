import React from 'react';
import PropTypes from 'prop-types';

const TodoFilterLink = ({visibility, filterValue, filterCounter, updateVisibility}) => {
  const className = visibility === filterValue ? 'selected' : '';

  return (
    <a href={'#/' + filterValue} className={className} onClick={() => updateVisibility(filterValue)}>
      {filterValue} ({filterCounter[filterValue]})
    </a>
  );
};

TodoFilterLink.prototype = {
  visibility: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  filterCounter: PropTypes.object.isRequired,
  updateVisibility: PropTypes.func.isRequired,
};

export default TodoFilterLink;
