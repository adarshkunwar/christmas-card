import { useEffect, useState } from "react";
import Particle from "./Particle";

const Background = () => {
  // Generate initial particles
  const generateParticles = (count: number) => {
    return new Array(count).fill(0).map(() => ({
      id: Math.random(), // Unique ID for each particle
      x: Math.floor(Math.random() * window.innerWidth), // Random horizontal position
      y: Math.random() * -window.innerHeight, // Start above the screen for a continuous effect
    }));
  };

  const [particles, setParticles] = useState(generateParticles(30)); // Initial particles

  useEffect(() => {
    // Interval to add new particles at the top of the screen
    const interval = setInterval(() => {
      setParticles((prev) => {
        if (prev.length < 100) {
          return [...prev, ...generateParticles(10)];
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-red-900">
      <div className="relative">
        {particles.map((value) => (
          <Particle
            x={value.x}
            y={value.y}
            key={value.id}
            onRemove={() =>
              setParticles((prev) => prev.filter((i) => i.id !== value.id))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Background;
