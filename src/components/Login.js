import React, { Component } from "react";

class Login extends Component {
  //an event handler that submits the page based on what we want
  handleSubmit = (e) => {
    e.preventDefault(); //this prevents the defualt behavior of the form which is to submit the kini and reload the page
    // here, you save the changes and call the server
    alert("submitted");
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              name="username"
              id="username"
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            ></input>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

// || this evaluates operands from left to right and returns the first truthy value
// && this evaluates operands from left to right and returns the first falsy value
// ! this evaluates the operand and returns the opposite of the value
// ? this is a ternary operator
// : this is a ternary operator
// ?? this is a ternary operator
