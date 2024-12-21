import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Card = ({ cardStage }: { cardStage: number }) => {
  const { cardImage, cardName } = useSelector((state: RootState) => state.card);
  const [position, setPosition] = useState({
    x: "50%",
    y: "50%",
  });

  useEffect(() => {
    if (cardStage == 2) setPosition({ x: "25%", y: "50%" });
    if (cardStage == 3) setPosition({ x: "75%", y: "50%" });
    if (cardStage == 4) setPosition({ x: "50%", y: "50%" });
  }, [cardStage]);

  return (
    <div
      className="absolute [perspective:1000px] h-[75vh] w-[500px] -translate-x-1/2 -translate-y-1/2 duration-1000"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div
        className="relative h-full w-full [transform-style:preserve-3d] transition-all duration-1000"
        style={{
          transform: cardStage === 4 ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front face */}
        <div className="absolute h-full w-full [backface-visibility:hidden] border border-yellow-50 rounded-2xl overflow-hidden">
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
            <div className="absolute bottom-0 right-1/4 left-1/4 h-20 bg-red-50 rounded-b-2xl text-3xl pt-5 rounded-lg">
              <div className="flex justify-center">
                {cardName ? cardName : "Card Name"}
              </div>
            </div>
          </div>
        </div>

        {/* Back face */}
        <div className="absolute h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden">
          <div className="h-full w-full bg-white p-4">backface</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
