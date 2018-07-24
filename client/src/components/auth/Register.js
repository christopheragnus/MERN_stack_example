import React, { Component } from 'react'


export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) { //  e is an event parameter
    this.setState({[e.target.name]: e.target.value});   // e.target.name is the input of anem/etc, name
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">
                Sign Up
                </h1>
              <p className="lead text-center">Create your DevConnector account</p>
              <form action="create-profile.html">
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Name" 
                  name="name" 
                  value={this.state.name}
                  onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Email Address" 
                  name="email" 
                  value={this.state.email}
                  onChange={this.onChange}
                  />
                </div>
                
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Password" 
                  name="password" 
                  value={this.state.password}
                  onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Password" 
                  name="password" 
                  value={this.state.password2}
                  onChange={this.onChange}
                  />
                </div>
               
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
