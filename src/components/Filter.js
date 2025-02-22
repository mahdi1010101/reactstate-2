import React from "react";

const Filter = ({ setFilter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Filter by title"
      />
      <input
        type="number"
        name="rating"
        onChange={handleChange}
        placeholder="Filter by rating"
        min="0"
        max="5"
      />
    </div>
  );
};

export default Filter;
