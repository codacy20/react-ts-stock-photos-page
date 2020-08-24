import React, { Component } from "react";
import { Contact } from "../contact/Contact";
import { Navigation } from "../navigation/Navigation";
import { Search } from "../search/Search";
import { Project } from "../project-tile/Project";

export class Card extends Component<{}, {}> {
  render() {
    return (
      <div>
        <p>card is working!</p>
        <Navigation />
        <Search />
        <Contact />
        <Project />
      </div>
    );
  }
}
