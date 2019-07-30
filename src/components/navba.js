import React, { Component } from "react";

class Navba extends Component {
  render() {
    return (
      <div data-vide-bg="video/video">
        <div className="container">
          <div className="banner-info">
            <h3>
              It is a long established fact that a reader will be distracted by
              the readable{" "}
            </h3>
            <div className="search-form">
              <form action="#" method="post">
                <input type="text" placeholder="Search..." name="Search..." />
                <input type="submit" defaultValue=" " />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navba;
