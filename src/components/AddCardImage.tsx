import { useEffect, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCardImage } from "../store/card/cardSlice";

const Figure = () => {
  const [src, setSrc] = useState<string>();
  const [isDragging, setIsDragging] = useState(false);
  const cardImage = useSelector((state: RootState) => state.card.cardImage);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleImageUpdate = () => {
      if (src && src !== cardImage) {
        dispatch(setCardImage(src));
      }
    };
    const delayDebounce = setTimeout(handleImageUpdate, 300);
    return () => clearTimeout(delayDebounce);
  }, [src, cardImage, dispatch]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSrc(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeFigure = () => {
    setSrc("");
    dispatch(setCardImage(""));
  };

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {/* Image Upload Area */}
      <div
        className={`relative rounded-lg border-2 border-dashed p-6 transition-colors duration-200 ${
          isDragging
            ? "border-blue-500 bg-blue-50"
            : src
              ? "border-gray-200 bg-gray-50"
              : "border-gray-300 bg-white hover:border-gray-400"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {src ? (
          // Image Preview
          <div className="relative w-full h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={src}
                alt="Uploaded image"
                className="max-w-full max-h-full w-auto h-auto rounded-md shadow-sm object-contain"
              />
            </div>
            <button
              onClick={removeFigure}
              className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow-md transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        ) : (
          // Upload Prompt
          <div className="text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="rounded-full bg-gray-100 p-3">
                <ImagePlus className="h-6 w-6 text-gray-600" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-800">
                  Drop an image here, or{" "}
                  <label className="cursor-pointer text-blue-500 hover:text-blue-600">
                    browse
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) =>
                        e.target.files?.[0] &&
                        setSrc(URL.createObjectURL(e.target.files[0]))
                      }
                    />
                  </label>
                </p>
                <p className="text-xs text-gray-500">
                  SVG, PNG, JPG or GIF (max. 2MB)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Figure;
