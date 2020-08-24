import React, { Component } from "react";
import "./Search.scss";

export class Search extends Component<{}, {}> {
  render() {
    return (
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <span className="material-icons">search</span>
      </div>
    );
  }
}
