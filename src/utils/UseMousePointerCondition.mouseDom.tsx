import { useEffect, useState } from "react";

const useMousePointerCondition = () => {
  const [mousePointer, setMousePointer] = useState({ pointerCondition: "" });
  useEffect(() => {
    document.addEventListener("mouseover", function (event: any) {
      var cursor = event;
    });
  }, []);
  return mousePointer;
};

export default useMousePointerCondition;
