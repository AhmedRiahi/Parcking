import React, { Component } from "react";

class CreateCar extends Component {
  state = {};
  render() {
    return (
      <div>
        <input type="text" placeholder="Serial Number"></input>

        <button className="btn btn-success">Save</button>
      </div>
    );
  }
}

export default CreateCar;
