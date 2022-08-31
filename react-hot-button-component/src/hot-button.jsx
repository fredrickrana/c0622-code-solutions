import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  }

  render() {
    if (this.state.numberOfClicks <= 3) {
      return <button onClick={this.handleClick} className="purple">Hot Button</button>;

    } else if (this.state.numberOfClicks <= 6) {
      return <button onClick={this.handleClick} className="light-purple">Hot Button</button>;

    } else if (this.state.numberOfClicks <= 9) {
      return <button onClick={this.handleClick} className="pink">Hot Button</button>;

    } else if (this.state.numberOfClicks <= 12) {
      return <button onClick={this.handleClick} className="orange">Hot Button</button>;

    } else if (this.state.numberOfClicks <= 15) {
      return <button onClick={this.handleClick} className="yellow">Hot Button</button>;

    } else {
      return <button onClick={this.handleClick} className="white">Hot Button</button>;
    }
  }
}
