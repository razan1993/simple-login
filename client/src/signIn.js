import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './sign.css';
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInputName: '',
      userInputPassword: '',
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  //
  onChangeText(e) {
    console.log(this.state);
    if (e.target.placeholder === 'name') {
      this.setState({
        userInputName: e.target.value,
      });
    }
    if (e.target.placeholder === 'password') {
      this.setState({
        userInputPassword: e.target.value,
      });
    }
  }

  fetchData(e) {
    e.preventDefault();
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.userInputName,
        password: this.state.userInputPassword,
      }),
    }).then(response => {
      console.log(response.status);
      if (response.status === 200) {
        alert('logged-in');
        this.props.history.push('game');
      } else if (response.status === 403) {
        alert('name and password does not exist');
      }
    });
  }

  // handelSubmit(event) {
  //   event.preventDefault();
  //   const { value } = this.state;
  //   const re = new RegExp(
  //     '^(?=.[A-Za-z)(?=.\\d)(?=[@$!%#?&])[A-Za-z\\d@$!%*#?&]{8,}$',
  //   );
  //   const isOk = re.test(value);
  //   if (!isOk) {
  //     return console.log(isOk);
  //   }
  // }

  render() {
    //  html
    return (
      <div className="form">
        <h1>Login</h1>
        <div className="form-group">
          {/* <label htmlFor="username">username</label> */}

          <input
            className="input1"
            type="text"
            name="name"
            onChange={this.onChangeText}
            placeholder="name"
            value={this.Name}
          ></input>
        </div>

        <div className="form-group">
          {/* <label htmlFor="password">password</label> */}

          <input
            className="input1"
            type="password"
            name="password"
            onChange={this.onChangeText}
            placeholder="password"
            value={this.Password}
          ></input>
        </div>

        <div className="submit" onClick={this.fetchData}>
          <button className="input2" type="button" value="submit">
            login
          </button>
        </div>
        {/* <input type="submit" onClick={this.fetchData} value="submit"></input> */}
      </div>
    );
  }
}
export default withRouter(login);
