import React from "react";

export default class Arrow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    return this.props.changeCard(this.props.dir);
  }

  render() {
    const { dir } = this.props;

    let arrow = <span></span>;
    if (dir === 'left') arrow = <span>&#8672;</span>;
    if (dir === 'right') arrow = <span>&#8674;</span>;

    return (<div className={`arrow ${dir}-arrow`}  
                 onClick={this.handleClick}>
                   {arrow}
            </div>)
  }
}