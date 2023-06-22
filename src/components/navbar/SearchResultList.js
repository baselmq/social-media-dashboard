import React from "react";
import { Link } from "react-router-dom";
export const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        const styleImage = {
          width: "20px",
          height: "20px",
        };
        return (
          <Link
            className=""
            to={`/details?id=${encodeURIComponent(result.idClub - 1)}`}
            key={id}
          >
            <div className="">
              <img style={styleImage} src={result.image} alt={result.image} />
              {result.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
