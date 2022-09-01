import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatch: false,
      count: 0
    };
    this.timer = this.timer.bind(this);
    this.reset = this.reset.bind(this);
  }

  timer() {
    if (!this.state.stopwatch) {
      this.count = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      this.setState({ stopwatch: true });
    } else if (this.state.stopwatch) {
      clearInterval(this.count);
      this.setState({ stopwatch: false });
    }
  }

  reset() {
    if (this.state.stopwatch === false) {
      this.setState({ count: 0 });
    }
  }

  render() {
    let className;
    if (this.state.stopwatch === true) {
      className = 'fa-solid fa-pause';
    } else if (this.state.stopwatch === false) {
      className = 'fa-solid fa-play';
    }
    return (
      <div className='container alignment'>
        <div onClick={this.reset} className='circle'>
          <h1>{this.state.count}</h1>
        </div>
        <i onClick={this.timer} className={className}></i>
      </div>
    );
  }
}
