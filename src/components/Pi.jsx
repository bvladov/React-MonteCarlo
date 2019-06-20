import React, { Component } from "react";

class Pi extends Component {
  pi(n) {
    const WIDTH = window.innerWidth / 3;
    const HEIGHT = WIDTH;
    var x;
    var y;
    var inside = 0;
    var total = 0;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", `${HEIGHT}`);
    svg.setAttribute("width", `${WIDTH}`);

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("id", "circle");
    circle.setAttribute("r", `${WIDTH / 2 - 1}`);
    circle.setAttribute("cx", `${WIDTH / 2}`);
    circle.setAttribute("cy", `${HEIGHT / 2}`);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("fill", "transparent");
    circle.setAttribute("stroke-width", "2");
    svg.appendChild(circle);
    document.getElementById("_pi").appendChild(svg);

    for (let i = 0; i < n; i++, total++) {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      const dot = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      dot.setAttribute("class", "dot");
      dot.setAttribute("r", "1.5");
      dot.setAttribute("cx", `${(x * WIDTH) / 2 + WIDTH / 2}`);
      dot.setAttribute("cy", `${(y * HEIGHT) / 2 + HEIGHT / 2}`);
      if (Math.sqrt(x * x + y * y) < 1) {
        inside++;
        dot.setAttribute("fill", "green");
      } else dot.setAttribute("fill", "red");

      let value = (4 * inside) / total;
      ((i, value) => {
        setTimeout(() => {
          svg.appendChild(dot);
          document.getElementById("pi").innerHTML =
            "π ≈ " + value + "<br />i = " + (i + 1);
        }, i / n);
      })(i, value);
    }
    return;
  }

  generate = () => {
    var n = this.props.n;
    if (isNaN(n) || n === "" || n > 5000000 || n <= 0)
      alert("Enter a valid number under 5,000,000!");
    else {
      const element = document.getElementsByTagName("svg");
      if (element.length !== 0) element[0].remove();
      this.pi(n);
    }
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn" onClick={this.generate}>
          Generate pi
        </button>
        <h1 id="pi"> </h1>
      </React.Fragment>
    );
  }
}

export default Pi;
