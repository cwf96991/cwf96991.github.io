import React, { useState, useEffect } from "react";

const useMobile = () => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  const [isMobile, setIsMobile] = useState(false);
  return isMobile;
};

export default useMobile;
