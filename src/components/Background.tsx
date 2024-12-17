import Particle from "./Particle";

const Background = () => {
  const generateParticles = (count: number) => {
    return new Array(count).fill(0).map(() => ({
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight * 0.01),
    }));
  };

  const particles = generateParticles(10);
  return (
    <div className="bg-red-300 absolute top-0 left-0 bottom-0 right-0 -z-10">
      <div className="relative">
        {particles.map((value, index) => {
          return <Particle x={value.x} y={value.y} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Background;
