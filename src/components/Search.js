import React from "react";

const Search = (props) => {
  const { filterText, setFilterText } = props;

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };
  return (
    <div className="search">
      <h1>&#128526; Emoji Search &#128526;</h1>
      <input
        placeholder="What emoji are you looking for ?"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
