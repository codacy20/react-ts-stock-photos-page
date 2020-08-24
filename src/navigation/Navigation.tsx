import React, { Component } from "react";
import "./Navigation.scss";

export class Navigation extends Component<{}, {}> {
  render() {
    return (
      <div className="nav-container">
        <div className="item">
          <span>Vector</span>
          <div className="border"></div>
        </div>
        <div className="item">
          <span>Illustrations</span>
          <div className="border"></div>
        </div>
        <div className="item">
          <span>Images</span>
          <div className="border"></div>
        </div>
        <div className="item">
          <span>Icons</span>
          <div className="border"></div>
        </div>
      </div>
    );
  }
}
