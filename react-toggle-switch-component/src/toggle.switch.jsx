import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggled: !this.state.isToggled });
  }

  render() {
    if (!this.state.isToggled) {
      return (
        <div onClick={this.handleClick}>
          <button className="button-off">
            <button className='toggle-off'></button>
          </button>
          <span>OFF</span>
        </div>
      );
    } else {
      return (
        <div onClick={this.handleClick}>
          <button className="button-on">
            <button className='toggle-on'></button>
          </button>
          <span>ON</span>
        </div>
      );
    }
  }
}
