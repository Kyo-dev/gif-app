import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifLoadGrid } from "./GifLoadGrid";
import PropTypes from 'prop-types';

export const GifCollection = ({ category }) => {
  const {data:gifs, loading} = useFetchGifs(category);
  return (
    <>
      <h3 className= "card animate__animated animate__backInDown">{category}</h3>
      {loading && <p className ="card animate__animated animate__flash">Loading...</p> }
      <div className="card-container">
        {gifs.map((img) => (
          <GifLoadGrid key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifCollection.propTypes = {
  category: PropTypes.string.isRequired
}