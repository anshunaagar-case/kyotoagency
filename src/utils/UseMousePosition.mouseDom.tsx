import { useState, useEffect } from "react";


const useMousePointerCoordinates = () => {
  const [mouseValue, setMouseValue] = useState({
    xCoordinate: 0,
    yCoordinate: 0,
  });
  const updateMouseEvent = (event: any) => {
    setMouseValue({ xCoordinate: event.clientX, yCoordinate: event.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMouseEvent);
  });
  return mouseValue;
};

export default useMousePointerCoordinates;
