import React, { Component } from 'react'
import '../css/App.css'
import PropTypes from 'prop-types';


class GridSpinner extends Component {

  componentDidMount = () => {
    const spinner = document.getElementById("grid-spinner-div")
    setTimeout(() => {
      spinner.classList.add("hide")
    }, this.props.timeout);
  }

  render() {
    return (
      <div className="grid-spinner-div" id="grid-spinner-div">
        <i className="fal fa-sync"></i>
      </div>
    )
  }
}

export default GridSpinner;

GridSpinner.propTypes = {
  timeout: PropTypes.number,
}