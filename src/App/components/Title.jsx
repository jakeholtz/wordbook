import React from "react";

export default class Title extends React.Component {
  displayWord() {
    return  this.props.syllables.join('·');
  }
  
  render() {
    return <div className="word-title">{this.displayWord()}</div>
  }
}