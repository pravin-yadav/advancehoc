import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const getInput = event => event.target.value;

const SearchContact = ({ filterText, onUserInput }) => (
  <div>
    <Input
      className="inpt-srch"
      icon="users"
      value={filterText}
      iconPosition="left"
      placeholder="Search users..."
      onChange={event => onUserInput(getInput(event))}
    />
  </div>
);

SearchContact.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
};

export default SearchContact;
