import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading : true };
    this.propTypes = { waitBeforeShow: PropTypes.number.isRequired };
  }

  componentDidMount() {
    setTimeout(() => {
       this.setState({ loading: false });
    }, this.props.waitBeforeShow);
  }

  render() {
    if (this.state.loading) return '';
    
    return (
      <div>Hello Snake</div>
    );
  }
}

ReactDOM.render(<App waitBeforeShow={500} />, document.getElementById('app'));