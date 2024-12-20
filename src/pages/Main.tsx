import { useState } from "react";
import Card from "../components/Card";
import Logo from "../components/logo";
import Button from "../components/Button";
import Figure from "../components/AddCardImage";

const Main = () => {
  const [cardStage, setCardStage] = useState(1);
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
      <Card cardStage={cardStage} />
      {cardStage === 2 && (
        <div className="absolute right-1/2 top-1/2 translate-x-1/2 w-[36rem]">
          <Figure />
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
