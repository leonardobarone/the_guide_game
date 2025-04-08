import { useEffect, useState } from "react";

const useHeight = (offset) => {
  const [height, setHeight] = useState(() => window.innerHeight - offset);

  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight - offset);

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [offset]);

  return height;
};

export default useHeight;

// Per calcolare l'altezza
// const height = useHeight(110);