import React from "react";

import "./helpOptions.css";

const HelpOptions = (props) => {
  const options = [
    {
      text: "Access Issues",
      handler: props.actionProvider.handlehelpList,
      id: 1,
    },
    {
      text: "Data Quality Issue",
      handler: props.actionProvider.handleDQhelpList,
      id: 2,
    },
    {
      text: "Logistics",
      handler: props.actionProvider.handleLGhelpList,
      id: 3,
    },
    {
      text: "Finance",
      handler: props.actionProvider.handleFhelpList,
      id: 4,
    },
    { text: "Daily Management",
     handler: props.actionProvider.handleDMhelpList,
      id: 5, },
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