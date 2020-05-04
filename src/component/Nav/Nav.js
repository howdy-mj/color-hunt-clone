import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showDetail = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { show } = this.state;
    return (
      <div className='Nav'>
        <div className='navContainer'>
          <Link to='/'>
            <div className='title'>
              <img
                alt=''
                src='https://colorhunt.co/img/color-hunt-palettes-logo.png'
              />
              <div className='name'>Color Hunt</div>
            </div>
          </Link>
          <div className='right'>
            <div className='topCategory'>
              <span>Plaettes</span>
            </div>
            <div className='sort' onClick={this.showDetail}>
              <span>New</span>
              <img
                src='https://colorhunt.co/img/color-hunt-palettes-icon_dropdown.png'
                alt=''
              />
            </div>
            <div className='sortDetail'>
              <ul className={`detailCategory shadow ${show ? "show" : ""}`}>
                <li>New</li>
                <li>Trendy</li>
                <li>Popular</li>
                <li>Random</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="more">•••</div>
      </div>
    );
  }
}

export default Nav;
