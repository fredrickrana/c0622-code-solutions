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

  // render() {
  //   let className;
  //   if (this.state.open) {
  //     className = '';
  //   } else {
  //     className = 'hidden';
  //   }
  //   return (
  // <div>
  //   <div>
  //     <i className="fa-solid fa-bars"></i>
  //   </div>
  //   <div>

  //   </div>
  // </div>
  // )
//   }
}
