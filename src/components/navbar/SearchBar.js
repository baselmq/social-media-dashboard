import { useEffect, useState } from "react";
import userData from "../../data/data";
import { PathIcons } from "../../util/PathIcons";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const search = (event) => {
    let query = event.target.value;

    let updatedList = userData.filter((item) => {
      return item.firstName.toLowerCase().includes(query.toLowerCase());
    });
    // setResults(updatedList);
    query.trim() === "" ? setResults("") : setResults(updatedList);
    query.trim() === "" ? setInput("") : setInput(updatedList);
  };
  useEffect(() => {}, [input]);
  return (
    <div className="input_wrapper">
      {/* <img style={sizeIcon} src={searchIcon} alt="" /> */}
      {PathIcons.search}
      <input
        className="search_bar me-2"
        type="search"
        placeholder="Search"
        onChange={search}
      ></input>
      {/* <input placeholder="Type to search..." onChange={search} /> */}
    </div>
  );
};
