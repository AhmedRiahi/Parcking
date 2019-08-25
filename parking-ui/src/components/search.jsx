import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {};
  render() {
    return (
      <div>
        <span>{process.env.REACT_APP_API_URL}</span>
        <input type="text"></input>
        <button className="btn btn-success" onClick={this.handleSearchEvent}>
          Search
        </button>
      </div>
    );
  }

  handleSearchEvent() {
    axios
      .get(process.env.REACT_APP_API_URL + "hello/greeting")
      .then(response => console.log(response.data));
  }
}

export default Search;
