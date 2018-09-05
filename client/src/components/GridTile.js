import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../css/App.css'
import { Link } from "react-router-dom";

let counter = 0;
class GridTile extends Component {

  showImages = () => {
    const htmlCol = document.getElementsByClassName("grid-image")
    const picArr = Array.from(htmlCol)
    counter++

    if(counter >= this.props.images.length -1) {
      setTimeout(() => {
        picArr.forEach(img => img.classList.add("show"))
      }, 560);
    }
  }

  render() {
    const { images, index } = this.props
    return (
      <Link to={`/picture/${images[index].id}`} key={images.id} className="link">
        <img src={images[index].thumb} 
          alt="Gallery" 
          onLoad={this.showImages}
          className={"grid-image"} 
          id={`${images[index].id.toString()}`} /> 
      </Link>

    )
  }
}

GridTile.propTypes = {
  images: PropTypes.array,
  index: PropTypes.number
}

export default GridTile;