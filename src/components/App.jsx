import React, { Component } from "react";
import "../index.css";
import E from "./E";
import Pi from "./Pi";
import Input from "./Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pi_value: 0,
      e_value: 0
    };
  }

  onChangePi = value => {
    this.setState({ pi_value: value });
  };

  onChangeE = value => {
    this.setState({ e_value: value });
  };

  onSubmit = () => {};
  render() {
    return (
      <div className="input">
        <div className="_pi" id="_pi">
          <Pi n={this.state.pi_value} />
          <Input id="pi_n" onChange={this.onChangePi} />
        </div>
        <div className="_e" id="_e">
          <E n={this.state.e_value} />
          <Input id="e_n" onChange={this.onChangeE} />
        </div>
      </div>
    );
  }
}

export default App;
