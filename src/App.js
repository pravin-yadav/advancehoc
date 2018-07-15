import React, { Component } from 'react';
import axios from 'axios';
import ContactApp from './Contacts/ContactApp';
import './App.css';

class App extends Component {
  state = {
    contacts: []
  };
  componentDidMount() {
    axios
      .get('http://localhost:3000/contacts')
      .then(result => {
        this.setState({ contacts: result.data });
      })
      .catch(error => {
        throw error;
      });
  }
  render() {
    return (
      <div className="App">
        <ContactApp contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
