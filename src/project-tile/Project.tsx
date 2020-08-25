import React, { Component } from "react";
import "./Project.scss";
export class Project extends Component<{}, {}> {
  data = [
    {
      name: "project 1",
      url: "https://source.unsplash.com/WLUHO9A_xik/275x214",
      stack: ["#react", "#html"]
    },
    {
      name: "project 2",
      url: "https://source.unsplash.com/XZWQ5K97F6E/275x214",
      stack: ["#react", "#html"]
    },
    {
      name: "project 3",
      url: "https://source.unsplash.com/BIdxEi7cWLM/275x214",
      stack: ["#react", "#html"]
    },
    {
      name: "project 4",
      url: "https://source.unsplash.com/lsZvYFtxZlc/275x214",
      stack: ["#react", "#html"]
    },
    {
      name: "project 5",
      url: "https://source.unsplash.com/9QWzM2Q2I3c/275x214",
      stack: ["#react", "#html"]
    },
    {
      name: "project 6",
      url: "https://source.unsplash.com/CMpCe1fzNuE/275x214",
      stack: ["#react", "#html"]
    }
  ];

  render() {
    return (
      <div className="project-container">
        {this.data.map((item, index) => (
          <div className="tile" style={{ backgroundImage: `url(${item.url})` }}>
            <div className="info">
              <p>{item.name}</p>
              <div className="stack">
                {this.data[index].stack.map((stack) => (
                  <p>{stack}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
