import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    const { data } = this.props;
    console.log("Card data", data);
    return (
      <>
        { data && <div className='Card'>
          <div className='palettes'>
            <div
              className='one'
              style={{ backgroundColor: `${data.set[0]}` }}
            ></div>
            <div
              className='two'
              style={{ backgroundColor: `${data.set[1]}` }}
            ></div>
            <div
              className='three'
              style={{ backgroundColor: `${data.set[2]}` }}
            ></div>
            <div
              className='four'
              style={{ backgroundColor: `${data.set[3]}` }}
            ></div>
          </div>
          <div className='otherInfo'>
            <div className='like'>
              <img
                src='https://colorhunt.co/img/color-hunt-palettes-icon-heart.png'
                alt=''
              />
              <span>72</span>
            </div>
            <div className='date'>Today</div>
          </div>
        </div> }
      </>
    );
  }
}

export default Card;
