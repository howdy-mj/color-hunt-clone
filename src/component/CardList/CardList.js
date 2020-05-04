import React, { Component } from "react";
import Card from "./Card/Card";
import "./CardList.scss";

class CardList extends Component {
  render() {
    const { data } = this.props;
    console.log('cardlist data', data)
    return (
      <div className='CardList'>
        <Card info={data} />
      </div>
    );
  }
}

export default CardList;
