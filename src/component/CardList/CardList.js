import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Card from "./Card/Card";
import "./CardList.scss";

class CardList extends Component {
  render() {
    const { data } = this.props;
    // console.log('cardlist data', data)
    // console.log('id', data.id)
    return (
      <div className='CardList'>
        { data && data.map( (card) => {
          return (
          <Link to={`/color/${card.id}`}>
          <Card data={card} id={card.id} key={card.id}/>
          </Link>
          );
        })}
      </div>
    );
  }
}

export default withRouter(CardList);
