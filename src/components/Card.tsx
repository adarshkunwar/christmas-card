import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Card = ({ cardStage }: { cardStage: number }) => {
  const { cardImage } = useSelector((state: RootState) => state.card);

  console.log(cardImage);

  const [position, setPosition] = useState({
    x: "50%",
    y: "50%",
  });

  useEffect(() => {
    if (cardStage == 2) setPosition({ x: "25%", y: "50%" });
  }, [cardStage]);

  console.log(cardStage);

  return (
    <div
      className="absolute h-[75vh] w-[500px] -translate-x-1/2 -translate-y-1/2 border border-yellow-50 rounded-2xl overflow-hidden transform-all duration-1000"
      style={{
        left: position.x,
        top: position.y,
        animation: "bounce 1s infinite",
      }}
    >
      <div className="relative h-full w-full">
        {/* creating borders */}
        <div className="absolute left-0 right-0 top-0 h-4 bg-red-50 rounded-t-2xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-red-50 rounded-b-2xl"></div>
        <div className="absolute bottom-0 right-0 top-0 w-4 bg-red-50 rounded-r-2xl"></div>
        <div className="absolute bottom-0 left-0 top-0 w-4 bg-red-50 rounded-l-2xl"></div>

        {cardImage && (
          <img
            src={cardImage}
            alt="card"
            className="h-full w-full object-cover"
          />
        )}
        {/* card name */}
        <div className="absolute bottom-0 right-1/4 left-1/4 h-20 bg-red-50 rounded-b-2xl text-4xl pt-3 rounded-lg">
          <div className="flex justify-center">Card Name</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
