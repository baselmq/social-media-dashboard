import React, { useState } from "react";
import { PathIcons } from "../../../util/PathIcons";
const Felling = () => {
  const feelings = [
    { name: "happy", emoji: "😊" },
    { name: "sad", emoji: "😢" },
    { name: "angry", emoji: "😡" },
    { name: "excited", emoji: "🤩" },
    { name: "loved", emoji: "❤️" },
    { name: "confused", emoji: "😕" },
    { name: "grateful", emoji: "🙏" },
    { name: "proud", emoji: "👏" },
    { name: "surprised", emoji: "😮" },
    { name: "relaxed", emoji: "😌" },
    { name: "laughing", emoji: "😆" },
    { name: "worried", emoji: "😟" },
    { name: "bored", emoji: "😒" },
    { name: "in love", emoji: "😍" },
    { name: "hopeful", emoji: "🤞" },
    { name: "grumpy", emoji: "😠" },
    { name: "crying", emoji: "😭" },
    { name: "shocked", emoji: "😱" },
    { name: "silly", emoji: "🤪" },
    { name: "content", emoji: "😌" },
    // Add more feelings and emojis as needed
  ];

  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleItemClick = (name) => {
    setFilter(name);
  };

  const filteredFeelings = feelings.filter((feeling) =>
    feeling.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="row sticky-top">
        <div className="border rounded-5 p-2 ps-3 d-flex align-items-center gap-2">
          {PathIcons.search}
          <input
            type="text"
            placeholder="search"
            className="search_felling"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      {/* feelings */}
      <div className="row">
        <div className="col-md-12">
          <div className="scrollable-container">
            <div className="row d-flex justify-content-between mt-3 ps-4">
              {filteredFeelings.map((feeling, index) => (
                <div
                  key={index}
                  className="col-md-5 p-2 mt-2 rounded-5"
                  style={{
                    backgroundColor: "white",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#F0F0F0";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                  }}
                  onClick={() => handleItemClick(feeling.name)}
                >
                  {feeling.emoji} {feeling.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Felling;
