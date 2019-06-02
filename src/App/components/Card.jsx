import React from "react";
import Header from './Header.jsx';
import Title from './Title.jsx';
import Legend from './Legend.jsx';
import Definition from './Definition.jsx';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    const { date, word, syllables, stress, partSpeech, definition, index } = props;
    this.state = { date, word, syllables, stress, partSpeech, definition, index };
  }

  render() {

    const { date, syllables, stress, partSpeech, definition } = this.state;

    return (
      <div className={`card-container`}>
        <section className="header-section">
          <Header display={"Snake Word Of the Day"} date={date} />
        </section>
       
        <section className="content-section">
          <Title syllables={syllables} />
          <Legend partSpeech={partSpeech}
                  stress={stress}
                  syllables={syllables} />
        </section>

        <section className="definition-section">
          <Definition definition={definition} />
        </section>

      </div>
    );
  }
}