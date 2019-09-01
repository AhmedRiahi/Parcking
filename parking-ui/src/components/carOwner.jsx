import React, { Component } from "react";

class CarOWner extends Component {
  state = {};
  render() {
    return (
      <div>
        <span>{this.props.owner.name}</span>
        <span>{this.props.owner.phoneNumber}</span>
      </div>
    );
  }
}

export default CarOWner;
