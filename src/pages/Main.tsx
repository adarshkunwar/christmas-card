import { useState } from "react";
import Card from "../components/Card";
import Logo from "../components/logo";
import Button from "../components/Button";
import Figure from "../components/AddCardImage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCardName } from "../store/card/cardSlice";

const Main = () => {
  const [cardStage, setCardStage] = useState(1);
  const { cardImage } = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    console.log("button was clicked");
    setCardStage((prev) => prev + 1);
  };
  return (
    <div>
      {/* header */}
      <div className="flex justify-between">
        <Logo />
      </div>

      {/* body */}
      {cardStage === 3 && (
        <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] flex flex-col items-center gap-8 bg-black/20 backdrop-blur-lg p-12 rounded-2xl shadow-2xl">
          <h2 className="text-5xl font-bold text-white text-center bg-gradient-to-r from-white to-white/70 bg-clip-text">
            Name your card
          </h2>
          <div className="w-full">
            <input
              type="text"
              onChange={(e) => dispatch(setCardName(e.target.value))}
              placeholder="Enter card name..."
              className="w-full px-4 py-3 text-lg text-white bg-white/10 border-2 border-white/20 rounded-xl focus:outline-none focus:border-white/40 placeholder-white/50 transition-all duration-200"
            />
          </div>
        </div>
      )}
      <Card cardStage={cardStage} />
      {cardStage === 2 && (
        <div className="absolute right-1/3 top-1/4 translate-x-1/2 w-[36rem] duration-200  flex flex-col gap-20 ">
          <h2 className={`text-7xl text-white ${cardImage && "hidden"}`}>
            Chose an image
          </h2>
          <div>
            <Figure />
          </div>
        </div>
      )}
      {/* footer */}
      <div className="absolute bottom-10 right-10">
        <Button onClick={handleButtonClick}>NEXT</Button>
      </div>
    </div>
  );
};

export default Main;
