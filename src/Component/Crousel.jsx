import { useState } from "react";

const data = [
  "https://wallhalla.com/thumbs/44",
  "https://wallhalla.com/thumbs/79",
  "https://c4.wallpaperflare.com/wallpaper/1000/657/147/random-hd-wallpaper-preview.jpg",
  "https://i.redd.it/rfftqdg5flv71.jpg",
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleRightClick() {
    setActiveIndex((activeIndex + 1) % data.length);
  }

  function handleLeftClick() {
    if (activeIndex === 0) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <div className="relative flex justify-center items-center m-4 h-[90vh] w-[100vw] border-4 border-gray-500">
      <button
        className="fixed left-36 p-4 m-4 font-bold border-2 border-gray-500"
        onClick={handleLeftClick}
      >
        Left
      </button>
      
      <img
        src={data[activeIndex]}
        alt={`Wallpaper ${activeIndex + 1}`}
        className="object-contain max-h-[80vh] max-w-[90vw] rounded-lg"
      />

      <button
        className="fixed right-20 p-4 m-4 font-bold border-2 border-gray-500"
        onClick={handleRightClick}
      >
        Right
      </button>
    </div>
  );
};

export default App;
