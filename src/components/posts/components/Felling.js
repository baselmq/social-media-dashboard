import React, { useState } from "react";
import { PathIcons } from "../../../util/PathIcons";
import Popup from "../../popup/Popup";
import CreatePost from "./CreatePost";
import { useTranslation } from "react-i18next";
import { KeyLang } from "../../../util/KeyLang";

const Felling = () => {
  const { t } = useTranslation();

  const feelings = [
    { name: t(KeyLang.happy), emoji: "😊" },
    { name: t(KeyLang.sad), emoji: "😢" },
    { name: t(KeyLang.angry), emoji: "😡" },
    { name: t(KeyLang.excited), emoji: "🤩" },
    { name: t(KeyLang.loved), emoji: "❤️" },
    { name: t(KeyLang.confused), emoji: "😕" },
    { name: t(KeyLang.grateful), emoji: "🙏" },
    { name: t(KeyLang.proud), emoji: "👏" },
    { name: t(KeyLang.surprised), emoji: "😮" },
    { name: t(KeyLang.relaxed), emoji: "😌" },
    { name: t(KeyLang.laughing), emoji: "😆" },
    { name: t(KeyLang.worried), emoji: "😟" },
    { name: t(KeyLang.bored), emoji: "😒" },
    { name: t(KeyLang.inLove), emoji: "😍" },
    { name: t(KeyLang.hopeful), emoji: "🤞" },
    { name: t(KeyLang.grumpy), emoji: "😠" },
    { name: t(KeyLang.crying), emoji: "😭" },
    { name: t(KeyLang.shocked), emoji: "😱" },
    { name: t(KeyLang.silly), emoji: "🤪" },
    { name: t(KeyLang.content), emoji: "😌" },
    // Add more feelings and emojis as needed
  ];

  const [filter, setFilter] = useState("");
  const [selectedFeeling, setSelectedFeeling] = useState("");
  const [selectedFeelingEmoji, setSelectedFeelingEmoji] = useState("");
  const [showFeelings, setShowFeelings] = useState(true);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleItemClick = (name, emoji) => {
    setFilter(name);
    setSelectedFeeling(name);
    setSelectedFeelingEmoji(emoji);
    setShowFeelings(false); // Hide the feelings section
  };

  const filteredFeelings = feelings.filter((feeling) =>
    feeling.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {/*   feelings */}
      {showFeelings && (
        <div className="row">
          <div className="col-md-12">
            <div className="scrollable-container">
              <div className="row d-flex justify-content-between mt-3 ps-4">
                {filteredFeelings.map((feeling, index) => (
                  <div
                    key={index}
                    className="col-md-5 p-2 mt-2 rounded-5 me-4"
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
                    onClick={() => handleItemClick(feeling.name, feeling.emoji)}
                  >
                    {feeling.emoji} {feeling.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* CreatePost component */}
      {selectedFeeling && (
        <CreatePost
          text={t(KeyLang.feeling)}
          selectedFeeling={selectedFeeling}
          selectedFeelingEmoji={selectedFeelingEmoji}
        />
      )}
    </div>
  );
};

export default Felling;
