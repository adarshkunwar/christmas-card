import { Link } from "react-router-dom";

const ChooseYourMode = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl mx-4">
        <div className="flex gap-8 justify-center">
          <Link to="/show">
            <button
              className="w-full max-w-md py-16 px-6 rounded-lg bg-red-600 hover:bg-red-700
                     text-white font-semibold text-2xl transition-colors duration-200
                     flex items-center justify-center gap-2 relative"
            >
              <span className="absolute -top-3 -left-3 text-4xl">🎅</span>
              👀 See *Someone's* Card
            </button>
          </Link>

          <Link to="/create">
            <button
              className="w-full max-w-md py-16 px-6 rounded-lg bg-green-600 hover:bg-green-700
                     text-white font-semibold text-2xl transition-colors duration-200
                     flex items-center justify-center gap-2 relative"
            >
              <span className="absolute -top-3 -right-3 text-4xl">🎁</span>
              ✍️ Create Card for *Someone*
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourMode;
