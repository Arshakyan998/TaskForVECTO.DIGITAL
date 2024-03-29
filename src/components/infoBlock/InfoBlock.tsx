import React from "react";
import { baseDate } from "../../globalTypes/date";
import { date } from "../../redux/getDate/getDate.types";

import "./infoBlock.scss";

interface Props extends baseDate<string, date, number> {}

const InfoBlock: React.FC<Props> = React.memo(
  ({ TitleImage, Category, Date: data, Description, MpaRating, Duration }) => {
    const filmYear = new Date(data).getFullYear();

    const covertDuretionToHours = React.useMemo(() => {
      const allMinutes = Duration / 60;
      const getHours = Math.floor(allMinutes / 60);
      const getMinits = Math.round(allMinutes - getHours * 60);
      return `${getHours}h ${getMinits}m`;
    }, [Duration]);

    return (
      <div className="infoBlock container">
        <h3 className="infoBlock__category">
          {Category && Category.toUpperCase()}
        </h3>
        <div className="infoBlock__img">
          <img
            src={`../assets/${TitleImage}`}
            alt={TitleImage}
            loading="lazy"
          />
        </div>

        <div className="infoBlock__info">
          <h3 className="infoBlock__year">{filmYear} </h3>
          <h3 className="infoBlock__mpaRating"> {MpaRating}</h3>
          <h3 className="infoBlock__duration"> {covertDuretionToHours} </h3>
        </div>

        <div className="infoBlock__description">
          <h3>{Description} </h3>
        </div>

        <div className="infoBlock__button">
          <button className="infoBlock__btn infoBlock__btn-play">
            {" "}
            <h3>Play </h3>{" "}
          </button>
          <button className="infoBlock__btn infoBlock__btn-moreInfo">
            <h3> More Info</h3>
          </button>
        </div>
      </div>
    );
  }
);

export default InfoBlock;
