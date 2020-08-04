import React from "react";

export const GifLoadGrid = ({ title, gif }) => {
  return (
    <div className="card animate__animated animate__backInUp">
      <img src={gif} alt={title} />
      <p>{title}</p>
    </div>
  );
};
