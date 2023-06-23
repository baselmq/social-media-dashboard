import React from "react";
import { Link } from "react-router-dom";
import ImageUser from "../cache_image/ImageUser";
export const SearchResultList = ({ results }) => {
  return (
    <div className="results-list p-2">
      {results.map((result, id) => {
        return (
          <Link
            className="m-2 text-decoration-none"
            to={`/details?id=${encodeURIComponent(result.idClub - 1)}`}
            key={id}
          >
            <div className="d-flex align-items-center gap-2">
              <ImageUser image={result.image} width={45} />
              {`${result.firstName} ${result.lastName}`}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
