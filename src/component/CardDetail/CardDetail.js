import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../Nav/Nav";
import Card from "../CardList/Card/Card";
import "./CardDetail.scss";

class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theColor: [],
    };
  }

  componentDidMount = () => {
      console.log('card detail', this.props)
    const { id } = this.props.match.params;

    fetch(`https://us-central1-learn-frontend-a8f40.cloudfunctions.net/color/${id}`)
      .then((data) => data.json())
      .then((data) => this.setState({theColor: data}))
  };

  render() {
      const { theColor } = this.state;
      console.log('card detail theColor', theColor);
    return (
        <>
        <Nav />
        <div className='CardDetail'>
        <Card data={theColor.data} />
        </div>
      </>
    );
  }
}

export default withRouter(CardDetail);
