import React, { useState } from "react";
import { Upload } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  setCardDescription,
  setCardImage,
  setCardName,
} from "../store/card/cardSlice";
import Card from "./Card";

const ShowCard = () => {
  const dispatch = useDispatch();
  const [dragActive, setDragActive] = useState(false);
  const [filename, setFilename] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleJsonContent = (jsonContent: any) => {
    if (
      typeof jsonContent.cardName === "string" &&
      typeof jsonContent.cardImage === "string" &&
      typeof jsonContent.cardDescription === "string"
    ) {
      dispatch(setCardName(jsonContent.cardName));
      dispatch(setCardImage(jsonContent.cardImage));
      dispatch(setCardDescription(jsonContent.cardDescription));
      setShowCard(true);
      return true;
    }
    alert("Invalid JSON format. Please upload a valid card JSON.");
    return false;
  };

  const processFile = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonContent = JSON.parse(e.target?.result as string);
          if (handleJsonContent(jsonContent)) {
            setFilename(file.name);
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
          alert("Invalid JSON file. Please upload a valid JSON.");
        }
      };
      reader.readAsText(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  return (
    <div className="w-full max-w-md mx-auto ">
      {showCard ? (
        <Card cardStage={5} />
      ) : (
        <div className="w-full h-screen relative ">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <label
              className={`flex flex-col items-center justify-center bg-white p-12 w-96 h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors
              ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:bg-gray-50"}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload
                  className={`w-8 h-8 mb-2 ${dragActive ? "text-blue-500" : "text-gray-500"}`}
                />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">Card JSON files only</p>
                {filename && (
                  <p className="mt-2 text-sm text-blue-500 font-medium">
                    {filename}
                  </p>
                )}
              </div>
              <input
                type="file"
                className="hidden"
                accept="application/json"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCard;
