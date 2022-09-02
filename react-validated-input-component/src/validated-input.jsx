import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const passWord = this.state.password;
    const errorMark = (passWord.length < 8 || passWord === '') ? 'fa-solid fa-x' : 'fa-solid fa-check';
    const errorMessage = (passWord === '') ? 'A password is required' : (passWord.length < 8) ? 'Your password is too short.' : '';

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Password</h3>
          <input type="password" onChange={this.handlePasswordChange}/>
          <i className={errorMark} onChange={this.handlePasswordChange}></i>
          <p className='color-red'>{errorMessage}</p>
          <input type="submit" className='hidden'/>
        </form>
      </div>
    );
  }
}
