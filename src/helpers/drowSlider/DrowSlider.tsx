import React from "react";

import { baseDate } from "../../globalTypes/date";
import { date } from "../../redux/getDate/getDate.types";

import "./drowSlider.scss";

interface Props extends baseDate<string, date, number> {
  getCurrentFilm: (id: number) => void;
}

const DrowSlider: React.FC<Props> = ({ CoverImage, Id, getCurrentFilm }) => {
  const chnageCurrentFilm = () => {
    getCurrentFilm(+Id);
  };
  return (
    <div className="drowSlider" onClick={chnageCurrentFilm}>
      <img
        src={`../assets/${CoverImage}`}
        alt=""
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default DrowSlider;
