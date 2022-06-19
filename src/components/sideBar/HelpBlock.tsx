import React from "react";
import "./sidebar.scss";

export const HelpBlock = () => {
  const [helpBlock, setHelpBlock] = React.useState<string[]>([
    "language",
    "get help",
    "exit",
  ]);

  return (
    <div className="sideBar__helpBlock">
      {helpBlock.map((el) => {
        return <span key={el}>{el.toUpperCase()} </span>;
      })}
    </div>
  );
};
