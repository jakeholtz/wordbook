import React from "react";

export default class Legend extends React.Component {
  displayStress() {
    
    /* Turn into stressed/emphasis format [em, pha, sis] => em-PHA-sis */
    return this.props.syllables.map((e, i) => {
      return i === this.props.stress ? e.toUpperCase() : e.toLowerCase();
    }).join('-');
  }

  render() {
    return (
      <div className="word-legend">
        <span className="part-of-speech">{this.props.partSpeech}</span>
        <span className="pronunciation"> | {this.displayStress()} </span>
      </div>
    );
  };
}