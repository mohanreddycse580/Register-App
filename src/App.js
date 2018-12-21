import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TextInput from "@material-ui/core/TextField";
import Person from "./Person";
function validate(userName, email, password) {
  // true means invalid, so our conditions got reversed
  return {
    userName: userName.length === 0,
    email: email.length === 0,
    password: password.length === 0
  };
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      isShowRegisterForm: false
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { userName, email, password } = this.state;
    alert(
      `Signed up with  \n UserName: ${userName} \n  email: ${email} \n  password: ${password}`
    );
  };

  canBeSubmitted(e) {
    const errors = validate(
      this.state.userName,
      this.state.email,
      this.state.password
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  showRegisterPagehandler = () => {
    const toggleShowForm = this.state.isShowRegisterForm;
    this.setState({
      isShowRegisterForm: !toggleShowForm
    });
  };
  render() {
    const errors = validate(
      this.state.userName,
      this.state.email,
      this.state.password
    );
    let showrigisterform = null;
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    {
      if (this.state.isShowRegisterForm) {
        showrigisterform = (
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <h1>Registration</h1>
              </div>
              <input
                className={errors.userName ? "error" : ""}
                id="userName"
                type="text"
                placeholder="Enter userName"
                value={this.state.userName}
                onChange={this.handleChange}
                required
              />
              <input
                className={errors.password ? "error" : ""}
                type="password"
                id="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <input
                className={errors.email ? "error" : ""}
                id="email"
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <button disabled={isDisabled}>Sign up</button>
            </div>
          </form>
        );
      }
    }

    return (
      <div>
        <div className="registerButton">
          <button onClick={this.showRegisterPagehandler}>
            Show Registration Page
          </button>
        </div>
        {showrigisterform}
      </div>
    );
  }
}
export default App;
