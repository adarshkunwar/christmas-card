import { useEffect, useState } from "react";

const Particle = ({ x, y }: { x: number; y: number }) => {
  const [val, setVal] = useState({ x, y });
  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => {
        return { x: prev.x, y: prev.y + 10 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="absolute size-8 bg-white rounded-full animate-pulse"
      style={{
        top: val.y,
        left: val.x,
        transition: "top 1s linear",
        boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.6)",
      }}
    ></div>
  );
};

export default Particle;
