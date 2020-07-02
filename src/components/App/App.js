import React from "react";
import "../../App.css";
import BusinessList from "../bussinessList/bussinessList";
import SearchBar from "../searchBar/searchBar";
import Icon from "../iconss/icon";

import yelp from "../../util/Yelp";

//const businesses = yelp.search;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    yelp.search(term, location, sortBy).then((businesses) => {
      //console.log(businesses);
      this.setState({
        businesses: businesses,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Easy-Find</h1>
        <Icon></Icon>
        <SearchBar searchYelp={this.searchYelp}></SearchBar>
        <BusinessList businesses={this.state.businesses}></BusinessList>
        <footer id="footer">&copy; 2020 Cristian Bernal</footer>
      </div>
    );
  }
}

export default App;
