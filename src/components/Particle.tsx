import { useEffect, useMemo, useState } from "react";

const Particle = ({
  x,
  y,
  onRemove,
}: {
  x: number;
  y: number;
  onRemove: () => void;
}) => {
  const [val, setVal] = useState({ x, y });
  const randomSize = useMemo(() => Math.floor(Math.random() * 5) + 1, []); // Random size between 1 and 5

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => {
        const randomX = Math.floor(Math.random() * 3) - 1; // Slight horizontal drift
        const newY = prev.y + 5;

        // Remove the particle when it goes off-screen
        if (newY > window.innerHeight) {
          onRemove();
        }

        return { x: prev.x + randomX, y: newY };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onRemove]);

  return (
    <div
      className="absolute bg-white rounded-full"
      style={{
        top: val.y,
        height: randomSize,
        width: randomSize,
        left: val.x,
        boxShadow: "0 0 5px 2px rgba(255, 255, 255, 0.8)",
        transition: "top 0.05s linear, left 0.05s linear",
      }}
    ></div>
  );
};

export default Particle;
