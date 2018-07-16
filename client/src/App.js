import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() { //we callApi
    this.callApi()
      .then(res => this.setState({ response: res.express })) //we set the state to API response
      .catch(err => console.log(err));
  }

  callApi = async () => { // We create callApi method to interact with Express API
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  
  
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={ Landing } />
        <Footer />
        {/* <p className="App-intro">{this.state.response}</p> // this is the API response */}
      </div>
      </Router>
    );
  }
}

export default App;
