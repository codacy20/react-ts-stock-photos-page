import React, { Component } from "react";
import "./Project.scss";
export class Project extends Component<{}, {}> {
  render() {
    return (
      <div className="project-container">
        <div className="tile top"></div>
        <div className="tile top middle"></div>
        <div className="tile top"></div>
        <div className="tile down"></div>
        <div className="tile down middle"></div>
        <div className="tile down"></div>
      </div>
    );
  }
}
