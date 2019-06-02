import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h5 className="header-title">Snake Word Of The Day</h5>
        <br className="header-break"/>
        <h5 className="header-date">{this.props.date}</h5>
      </div>
    );
  }
}