import React, { Component } from 'react';


class Search extends Component {
    state = {  }
    render() { 
        return <div>
            <input type="text"></input>
            <button className="btn btn-success" onClick={this.handleSearchEvent}>Search</button>
        </div>;
    }


    handleSearchEvent (){
        console.log("searching for car owner")
    }
    
}
 
export default Search;