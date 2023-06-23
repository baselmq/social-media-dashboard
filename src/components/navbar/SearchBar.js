import { useEffect, useState } from "react";
import userData from "../../data/data";

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
      <i className="fi fi-rr-search"></i>
      <input
        className=" me-2"
        type="search"
        placeholder="Search"
        onChange={search}
      ></input>
      {/* <input placeholder="Type to search..." onChange={search} /> */}
    </div>
  );
};
