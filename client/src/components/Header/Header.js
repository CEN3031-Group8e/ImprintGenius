import React, { Component } from 'react';
import './Header.css';
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const path = this.props.location.pathname.slice(1);
    var headerStr;
    if (path === "Report") {
      headerStr = "Confirm Order"
    } else if (path === "Home") {
      headerStr = "Packages"
    } else if (path === "Customizer") {
      headerStr = "Customize Your Package"
    }
    return (
      <div className='mainHeader'>
        <h1>{headerStr}</h1>
      </div>
    );
  }
}

export default withRouter(Header);
