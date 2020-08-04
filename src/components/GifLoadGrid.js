import React from "react";
import PropTypes from 'prop-types'

export const GifLoadGrid = ({ title, gif }) => {
  return (
    <div className="card animate__animated animate__backInUp">
      <img src={gif} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifLoadGrid.propTypes = {
  title: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired
}