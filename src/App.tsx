import React from "react";
import { Loader, Main, SideBar } from "./components";

import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import getDateAsync from "./redux/getDate/getDateAsync";
import getFeaturedAsync from "./redux/getFeatured/getFeaturedAsync";

function App() {
  const dispatch = useAppDispatch();

  const getLoader = useAppSelector((state) => state.allDate.isLoading);
  const getError = useAppSelector((state) => state.allDate.error);


  const [loadingState, setLoadingState] = React.useState(true);

  React.useEffect(() => {
    dispatch(getDateAsync());
    dispatch(getFeaturedAsync());
  }, []);

  React.useEffect(() => {
    let timeOut:NodeJS.Timeout; 
    if (!getLoader) {
      timeOut= setTimeout(() => {
        setLoadingState(false);
      }, 700);
    }
    return ()=>clearTimeout(timeOut)
  }, [getLoader]);

   

  if(getError){
   return <h1>{getError}</h1>
  }


  return (
    <div className="wrapper">
      {loadingState ? (
        <Loader className={!getLoader ? "loadingFinish" : ""} />
      ) : (
        <>
          <SideBar />
          <Main />
        </>
      )}
    </div>
  );
}

export default App;
