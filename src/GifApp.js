import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifCollection } from "./components/GifCollection";

const GifApp = ({defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);
  return (
    <>
      <h2>Gif App</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((c, i) => (
          <GifCollection key={i} category={c} />
        ))}
      </ol>
    </>
  );
};

export default GifApp;
