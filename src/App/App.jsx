import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card.jsx';
import Arrow from './components/Arrow.jsx';
import { cardData } from './Data.jsx';
import PropTypes from 'prop-types';
import styles from "./App.less";

console.log(cardData);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading : true, currCardIndex: new Date().getDate() - 1};
    this.changeCard = this.changeCard.bind(this);
    this.propTypes = { waitBeforeShow: PropTypes.number.isRequired };
  }

  changeCard(direction) {
    let index = this.state.currCardIndex;
    if (direction === 'left') index = index > 0 ? index - 1 : cardData.length - 1;
    if (direction === 'right') index = (index + 1) % cardData.length;
    this.setState({currCardIndex: index})
  }

  componentDidMount() {
    setTimeout(() => {
       this.setState({ loading: false });
    }, this.props.waitBeforeShow);
  }

  render() {
    if (this.state.loading) return '';
    let card = cardData[this.state.currCardIndex];
    let { date, word, syllables, stress, partSpeech, definition } = card;
    
    return (
      <div className="app-container">
        <Arrow dir="left" changeCard={this.changeCard} />
        <Card key={word}
              index={this.state.currCardIndex}
              date={date}
              word={word}
              syllables={syllables}
              stress={stress}
              partSpeech={partSpeech}
              definition={definition}>
        </Card>
        <Arrow dir="right" changeCard={this.changeCard} />
      </div>
    );
  }
}

ReactDOM.render(<App waitBeforeShow={500} />, document.getElementById('app'));