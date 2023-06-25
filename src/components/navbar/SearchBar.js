import { useEffect, useState } from "react";
import userData from "../../data/data";
import { PathIcons } from "../../util/PathIcons";

export const SearchBar = ({ setResults, value }) => {
  const [input, setInput] = useState("");
  console.log();

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
      {PathIcons.search}
      <input
        value={
          input[value] == null
            ? ""
            : `${input[value].firstName} ${input[value].lastName}`
        }
        className="search_bar me-2"
        type="search"
        placeholder="Search"
        onChange={search}
      ></input>
    </div>
  );
};
