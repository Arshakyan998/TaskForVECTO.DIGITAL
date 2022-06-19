import React from "react";
import "./sidebar.scss";

export const SideBarProfile = () => {
  return (
    <div className="sideBar__profile">
      <div className="sideBar__img">
        {
          <img
            src="https://cdn.europosters.eu/image/750/assassins-creed-valhalla-eivor-i96965.jpg"
            loading="lazy"
            width={"100%"}
            height={"100%"}
          />
        }
      </div>
      <div className="sideBar__name">
        <span>Daniel</span>
      </div>
    </div>
  );
};
