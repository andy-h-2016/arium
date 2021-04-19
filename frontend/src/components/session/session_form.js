import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    if (this.props.errors.length > 0) {
      this.props.clearSessionErrors();
    }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.processDemo({
      username: "Demo",
      password: "123456",
    });
    this.props.closeModal();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let emailField = (
      <label>
        <br />
        Email
        <br />
        <input
          type="text"
          value={this.state.email}
          onChange={this.update("email")}
          className="signup-input"
          placeholder="Email"
          required
        />
      </label>
    );
    if (this.props.formType === "Sign in") {
      emailField = null;
    }
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="topOfForm">
            <p id="currentForm">{this.props.formType}</p>
            {this.props.otherForm}
          </div>

          <br />
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              Username
              <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
                placeholder="Username"
                required
              />
            </label>
            {emailField}
            <br />
            <label>
              Password
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                placeholder="Password"
                required
              />
            </label>
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
            <br />
            <button className="demoLogin" onClick={this.handleDemo}>
              Demo
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
