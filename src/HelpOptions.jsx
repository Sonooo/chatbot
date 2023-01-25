import React from "react";

import "./helpOptions.css";

const HelpOptions = (props) => {
  const options = [
    {
      text: "Access Issues",
      handler: props.actionProvider.handlehelpList,
      id: 1,
    },
    { text: "Data Quality Issue", handler: () => {}, id: 2 },
    { text: "Logistics", handler: () => {}, id: 3 },
    { text: "Finance", handler: () => {}, id: 4 },
    { text: "Daily Management", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default HelpOptions;