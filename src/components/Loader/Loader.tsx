import React from "react";

import "./Loader.scss";
type finitsh = "loadingFinish" | "";
interface props {
  className?: finitsh;
}

const Loader: React.FC<props> = ({ className }) => {
  return (
    <div className={className ? `${className} loader` : "loader"}>
      <div className="loader__spinner" />
    </div>
  );
};

export default Loader;
