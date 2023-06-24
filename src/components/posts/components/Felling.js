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
      <div className="border rounded-5 p-2 d-flex align-items-center gap-3">
        {PathIcons.search}
        <input
          type="text"
          placeholder="search"
          className=""
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
    </div>
    {/* feelings */}
    <div className="row">
      <div className="col-md-12">
        <div
          className="scrollable-container"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          <div className="row d-flex justify-content-between mt-3">
            {filteredFeelings.map((feeling, index) => (
              <div
                key={index}
                className="col-md-6 p-2 mt-2 rounded-5"
                style={{
                  backgroundColor: "white",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "lightgray";
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
