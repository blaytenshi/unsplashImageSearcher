import React from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };

  handleSearchWithTerm = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    // console.log("RESPONSE", response.data.results);

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar handleSearchWithTerm={this.handleSearchWithTerm} />
        <ImageList images={this.state.images} />
        <div>Images: {this.state.images.length}</div>
      </div>
    );
  }
}

export default App;
