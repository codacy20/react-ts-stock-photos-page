import React, { Component } from "react";
import "./Navigation.scss";

export class Navigation extends Component<{}, { active: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: 0
    };
  }
  data = [
    { name: "Vector" },
    { name: "Illustrations" },
    { name: "Images" },
    { name: "Images" }
  ];

  toggle(index: number) {
    this.setState({
      active: index
    });
  }

  render() {
    const navItem = this.data.map((item, index: number) => (
      <div className="item" onClick={() => this.toggle(index)} key={index}>
        <span>{item.name}</span>
        {index === this.state.active ? (
          <div className="border active"></div>
        ) : (
          <div className="border"></div>
        )}
      </div>
    ));

    return <div className="nav-container">{navItem}</div>;
  }
}
