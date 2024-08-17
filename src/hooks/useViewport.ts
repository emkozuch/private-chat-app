import { useEffect, useState } from "react";

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

export const useViewport = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowSize());

  const handleResize = () => {
    setWindowDimensions(getWindowSize());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
