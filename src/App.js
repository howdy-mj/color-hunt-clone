import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "./component/Nav/Nav";
import CardList from "./component/CardList/CardList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [],
    };
  }

  componentDidMount = () => {
    fetch("https://us-central1-learn-frontend-a8f40.cloudfunctions.net/colors")
      .then((data) => data.json())
    .then((data) =>
      this.setState({ color: data })
    );
  };

  render() {
    const { data } = this.state.color;
    // console.log('data', data)
    return (
      <div className='App'>
        <Nav />
        <CardList data={data} />
      </div>
    );
  }
}

export default withRouter(App);
