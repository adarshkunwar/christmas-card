import { useDispatch } from "react-redux";
import Card from "./Card";
import {
  setCardDescription,
  setCardImage,
  setCardName,
} from "../store/card/cardSlice";

const ShowCard = () => {
  const dispatch = useDispatch();

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonContent = JSON.parse(e.target?.result as string);
          if (
            typeof jsonContent.cardName === "string" &&
            typeof jsonContent.cardImage === "string" &&
            typeof jsonContent.cardDescription === "string"
          ) {
            dispatch(setCardName(jsonContent.cardName));
            dispatch(setCardImage(jsonContent.cardImage));
            dispatch(setCardDescription(jsonContent.cardDescription));
          } else {
            alert("Invalid JSON format. Please upload a valid card JSON.");
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
          alert("Invalid JSON file. Please upload a valid JSON.");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept="application/json" onChange={handleUserInput} />
      <Card cardStage={5} />
    </div>
  );
};

export default ShowCard;
