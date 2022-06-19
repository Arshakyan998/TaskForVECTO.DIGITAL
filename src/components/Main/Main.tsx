import React from "react";
import { useAppSelector } from "../../redux/hooks";
import InfoBlock from "../infoBlock/InfoBlock";
import Slider from "../slider/Slider";

import "./main.scss";

const Main: React.FC = () => {
  const currentFilm = useAppSelector((state) => state.currentFilm.currentFilm);

  const [showImgOrVideo, setShowImgOrVideo] = React.useState<boolean>(true);

  const timeOutRef = React.useRef<NodeJS.Timeout>();

  const changeImg = (): void => {
    timeOutRef.current = setTimeout(() => {
      setShowImgOrVideo(false);
    }, 2000);
  };

  React.useEffect(() => {
    setShowImgOrVideo(true);
    if (currentFilm.VideoUrl) {
      changeImg();
    }

    return () => clearTimeout(timeOutRef.current);
  }, [currentFilm.VideoUrl, currentFilm.Id]);

  return (
    <div
      className={"main"}
      style={{
        width: document.documentElement.clientWidth,
        maxHeight: document.documentElement.clientHeight,
      }}
    >
      <div className="main__block">
        <div className="main__show">
          <InfoBlock {...currentFilm} />
          {showImgOrVideo ? (
            <img
              src={`../assets/${currentFilm.CoverImage}`}
              width="100%"
              height="100%"
            />
          ) : (
            <video
              muted
              loop
              autoPlay
              width="100%"
              src={currentFilm.VideoUrl}
            />
          )}
        </div>
      </div>

      <div className="main__slider">
        <Slider />
      </div>
    </div>
  );
};

export default Main;
