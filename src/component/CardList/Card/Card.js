import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    const { info } = this.props;
    // console.log("info", info);
    return (
      <>
        {info && info.map((one, index) => {
          return (
            <div className='Card' key={index}>
              <div className='palettes'>
                <div
                  className='one'
                  style={{ backgroundColor: `${one.set[0]}` }}
                ></div>
                <div
                  className='two'
                  style={{ backgroundColor: `${one.set[1]}` }}
                ></div>
                <div
                  className='three'
                  style={{ backgroundColor: `${one.set[2]}` }}
                ></div>
                <div
                  className='four'
                  style={{ backgroundColor: `${one.set[3]}` }}
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
            </div>
          );
        })}
      </>
    );
  }
}

export default Card;
