import React, { Component } from "react";
import axios from "axios";
import CarOWner from "./carOwner";

class SearchCar extends Component {
  state = {
    searchQuery: "",
    cars: [],
    owner: {}
  };
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={event =>
              this.setState({ searchQuery: event.target.value })
            }
          ></input>
          <button
            className="btn btn-success"
            onClick={event => this.handleSearchEvent()}
          >
            Search
          </button>
        </div>
        <div>
          <CarOWner owner={this.state.owner}></CarOWner>
        </div>
      </div>
    );
  }

  handleSearchEvent() {
    axios
      .get(process.env.REACT_APP_API_URL + "car/" + this.state.searchQuery)
      .then(response => console.log(response.data));
  }
}

export default SearchCar;
