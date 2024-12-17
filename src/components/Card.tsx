import { useState } from "react";

const Card = () => {
  const [position, setPosition] = useState({
    x: "50%",
    y: "50%",
  });
  return (
    <div
      className="absolute h-[75vh] w-[500px] -translate-x-1/2 -translate-y-1/2 border border-yellow-50 rounded-2xl overflow-hidden"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div className="relative h-full w-full">
        {/* creating borders */}
        <div className="absolute left-0 right-0 top-0 h-4 bg-red-50 rounded-t-2xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-red-50 rounded-b-2xl"></div>
        <div className="absolute bottom-0 right-0 top-0 w-4 bg-red-50 rounded-r-2xl"></div>
        <div className="absolute bottom-0 left-0 top-0 w-4 bg-red-50 rounded-l-2xl"></div>

        {/* card name */}
        <div className="absolute bottom-0 right-1/4 left-1/4 h-20 bg-red-50 rounded-b-2xl"></div>
      </div>
    </div>
  );
};

export default Card;
