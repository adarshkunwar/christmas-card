import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  encodeCardToBase64,
  loadCardFromBase64,
  setCardDescription,
} from "../store/card/cardSlice";

const Card = ({ cardStage }: { cardStage: number }) => {
  const card = useSelector((state: RootState) => state.card);
  const { cardImage, cardName } = card;
  const dispatch = useDispatch();
  const [position, setPosition] = useState({
    x: "50%",
    y: "50%",
  });

  const shareLink = `${window.location.origin}/#${encodeCardToBase64(card)}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  useEffect(() => {
    if (cardStage == 2) setPosition({ x: "25%", y: "50%" });
    if (cardStage == 3) setPosition({ x: "75%", y: "50%" });
    if (cardStage == 4) setPosition({ x: "50%", y: "50%" });
  }, [cardStage]);

  useEffect(() => {
    const hash = window.location.hash.substring(1); // Get Base64 from URL
    if (hash) {
      dispatch(loadCardFromBase64(hash));
    }
  }, [dispatch]);

  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute [perspective:1000px] h-[75vh] w-[500px] -translate-x-1/2 -translate-y-1/2 duration-1000"
      style={{
        left: position.x,
        top: position.y,
      }}
      ref={cardRef}
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
              <div className="flex justify-center pacifico-regular">
                {cardName ? cardName : "Card Name"}
              </div>
            </div>
          </div>
        </div>

        {/* Back face */}
        <div className="absolute h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden">
          <div className="h-full w-full bg-white p-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMjBMMjAgMzBMMzAgNDBMNDAgMzBMMzAgMjBaIiBmaWxsPSJyZ2JhKDIyMCwgMjAsIDYwLCAwLjEpIi8+PC9zdmc+')] bg-repeat">
            <div className="relative h-full w-full bg-white/80 rounded-lg p-6 shadow-inner">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-red-600/20 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-600/20 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-red-600/20 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-red-600/20 rounded-br-lg"></div>

              {/* Content Area */}
              <div className="h-full flex flex-col items-center gap-4 pt-8">
                <div className="text-red-600/80 text-xl font-serif italic">
                  Dear Friend,
                </div>
                <textarea
                  onChange={(e) => dispatch(setCardDescription(e.target.value))}
                  placeholder="Write your Christmas message here..."
                  className="pacifico-regular  flex-1 w-full bg-transparent border-none text-gray-700 placeholder-gray-400/50 focus:outline-none resize-none font-serif text-lg leading-relaxed"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(transparent, transparent 39px, #f0f0f0 40px)",
                    lineHeight: "40px",
                    paddingTop: "8px",
                  }}
                />
                <div className="text-red-600/80 text-xl font-serif italic self-end pr-8">
                  With love,
                </div>
                p-6
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-white mx-auto px-20 py-2 rounded-full"
        onClick={copyToClipboard}
      >
        download as image
      </button>
    </div>
  );
};

export default Card;
