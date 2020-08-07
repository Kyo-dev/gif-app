import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length >= 3) {
      setCategories((cat) => [inputValue, ...cat]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        value={inputValue}
        type="text"
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}