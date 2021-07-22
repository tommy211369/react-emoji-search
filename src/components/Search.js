import React from "react";

const Search = (props) => {
  const { filterText, setFilterText } = props;

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };
  return (
    <div>
      <h1>Emoji Search</h1>
      <input
        placeholder="What emoji are you looking for ?"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
