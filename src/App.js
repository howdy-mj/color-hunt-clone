import React, { Component } from "react";
import Nav from "./component/Nav/Nav";
import CardList from "./component/CardList/CardList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleColor: {
        data: [
          {
            id: 1,
            set: ["#f8f3eb", "#FF6868", "#bbee22", "#f8fedb"],
          },
          {
            id: 2,
            set: ["#FF6868", "#3322f8", "#12dd33", "#8833ff"],
          },
          {
            id: 3,
            set: ["#eeff88", "#f2f8ee", "#00ff28", "#33ff99"],
          },
        ],
      },
    };
  }

  // componentDidMount = () => {
  //   fetch("/data/color.json")
  //     .then((data) => data.json())
  //   .then((data) =>
  //     this.setState({ color: data }, () => {
  //       console.log(this.state.color);
  //     })
  //   );
  // };
  render() {
    const { sampleColor } = this.state;
    return (
      <div className='App'>
        <Nav />
        <CardList sampleColor={sampleColor} />
      </div>
    );
  }
}

export default App;
