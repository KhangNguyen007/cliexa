import React, { useEffect, useState } from "react";


function getWindowDimensions() {
  const { innerWidth: w, innerHeight: h } = window;
  return {
    w,
    h
  };
}

export function useWindowDimensions() {
/*
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  */

/*
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  */
  //return windowDimensions;
  return   getWindowDimensions()
}
