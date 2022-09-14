import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const modalBackground = (!this.state.open) ? 'hidden' : 'modal-background';
    const modal = (!this.state.open) ? 'hidden' : 'modal';
    const menuButton = (!this.state.open) ? 'fa-solid fa-bars' : 'hidden';
    return (
      <div>
        <div className={modalBackground} onClick={this.handleClick}>
        </div>
        <i className={menuButton} onClick={this.handleClick}></i>
        <div className={modal}>
          <div className='modal-content'>
            <a href="#" className="menu-title">Menu</a>
            <a href="#">About</a>
            <a href="#">Get Started</a>
            <a href="#">Sign In</a>
          </div>
        </div>
      </div>
    );
  }
}
