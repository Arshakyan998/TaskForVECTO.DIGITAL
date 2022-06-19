import React from "react";
import DrowSlider from "../../helpers/drowSlider/DrowSlider";
import { currentFilm } from "../../redux/currentFilm/currentFilm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import "./slider.scss";
import { useSort } from "./sort";

const Slider: React.FC = () => {
  const { date, isLoading } = useAppSelector((state) => state.allDate);
  const dispatch = useAppDispatch();
  const getFilm = currentFilm.actions.getCurrentFilm;

  const [mouseMove, setMouseMove] = React.useState<boolean>(false);
  const [slideX, setSlideX] = React.useState<number>();
  const [scrollLeft, setScrollLEft] = React.useState<number>();
  const [onSlider, setOnSlider] = React.useState<boolean>(false);

  let newDate = useSort(date);

  const mouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setMouseMove(true);
    setSlideX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLEft(e.currentTarget.scrollLeft);
    e.currentTarget.style.cursor = "grab";
  };
  const mouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.cursor = "grab";

    setMouseMove(false);
  };
  const mouseUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.cursor = "grab";

    setMouseMove(false);
  };
  const mouseMoveTo: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setOnSlider(true);

    e.currentTarget.style.cursor = "pointer";

    if (mouseMove) {
      e.preventDefault();
      e.currentTarget.style.cursor = "grabbing";
      let x = e.pageX - e.currentTarget.offsetLeft;
      let goTo = x - slideX!;

      e.currentTarget.scrollLeft = scrollLeft! - goTo;
    }
  };

  const getCurrentFilm = (id: number) => {
    const film = newDate.find((el) => +el.Id === id);
    dispatch(getFilm(film));

    localStorage.setItem("favoritFilmId", id.toString());
  };

  if (isLoading) {
    return <div> Loading</div>;
  }

  return (
    <div
      className="slider"
     >
      <div className="slider__block">
        <h3 style={{ color: "wheat" }}>Tranding now</h3>

        <div
          className="slider__slides"
          onMouseDown={mouseDown}
          onMouseLeave={mouseLeave}
          onMouseUp={mouseUp}
          onMouseMove={mouseMoveTo}
        >
          {newDate.map((el) => {
            return (
              <DrowSlider {...el} getCurrentFilm={getCurrentFilm} key={el.Id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
