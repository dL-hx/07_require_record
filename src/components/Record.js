import React, { Component } from "react";
import PropTypes from "prop-types"; //æ·»å è¿ä¸è¡å¯¼å¥éææ£æ¥çåº
export default class Record extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.title}</td>
        <td>{this.props.amount}</td>
      </tr>
    );
  }
}

Record.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number
};
