import React, { Component } from "react";
import { Contact } from "../contact/Contact";
import { Navigation } from "../navigation/Navigation";
import { Search } from "../search/Search";
import { Project } from "../project-tile/Project";
import "./Card.scss";
export class Card extends Component<{}, {}> {
  render() {
    return (
      <div className="card-container">
        <div className="row1">
          <Navigation />
        </div>
        <div className="row2">
          <Search />
          <Contact />
        </div>
        <div className="row3">
          <Project />
        </div>
      </div>
    );
  }
}
