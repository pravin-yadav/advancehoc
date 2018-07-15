import React from 'react';
import SearchContact from './ContactSearch';
import ContactList from './ContactList';
import LoaderHOC from '../HOC/LoaderHOC';
import PropTypes from 'prop-types';

class ContactApp extends React.Component {
  state = {
    filterText: ''
  };

  handleInput = input => {
    this.setState({ filterText: input });
  };
  render() {
    return (
      <div className="contact-app">
        <div className="srch-cnt">
          <SearchContact
            filterText={this.state.filterText}
            onUserInput={this.handleInput}
          />
        </div>
        <div>
          <ContactList
            contacts={this.props.contacts}
            filterText={this.state.filterText}
          />
        </div>
      </div>
    );
  }
}
ContactApp.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired
};
export default LoaderHOC('contacts')(ContactApp);
