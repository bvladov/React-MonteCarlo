import React, { Component } from "react";

class E extends Component {
  e(n) {
    var x;
    var results = [];
    var resultsSum = 0;
    var total = 0,
      k = 0;
    for (let i = 0; i < n; i++) {
      x = Math.random();
      total += x;
      k++;
      if (total >= 1) {
        total = 0;
        results.push(k);
        resultsSum += k;
        k = 0;
      }
      let value = resultsSum / results.length;
      (value => {
        setTimeout(() => {
          document.getElementById("e").innerHTML =
            "e ≈ " + value + "<br />i = " + (i + 1);
        }, i / n);
      })(value);
    }
    return;
  }

  handleForm = event => {
    event.preventDefault();
  };

  generate() {
    var n = this.props.n;
    if (isNaN(n) || n === "" || n > 5000000 || n <= 0)
      alert("Enter a valid number under 5,000,000!");
    else {
      this.e(n);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleForm} className="e">
        <button className="btn" onClick={this.generate.bind(this)}>
          Generate e
        </button>
        <h1 id="e"> </h1>
      </form>
    );
  }
}

export default E;
