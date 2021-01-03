import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
    
  };
  constructor(props) {
    super(props);
    console.log("App component constructor");
  }
  add = () => {
    this.setState(current => ({count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("component is updated");
  }
  componentWillUnmount() {
    console.log("component will be unmounted")
  }
  render() {
    console.log("component rendering in render()");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
