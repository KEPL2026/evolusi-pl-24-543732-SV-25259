import { useState } from "react";
import "./App.css";

function App() {
  const [isSlide, setSlide] = useState(false);
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-20 left-0 w-full border-t border-dashed border-gray-400" />
      <div className="absolute bottom-20 left-0 w-full border-t border-dashed border-gray-400" />

      <div className="absolute left-10 top-0 h-full border-l border-dashed border-gray-400" />
      <div className="absolute right-10 top-0 h-full border-l border-dashed border-gray-400" />

      <section className="flex flex-col gap-4 items-center justify-center h-full">
        <h1 className="text-4xl font-medium">FULLSTACK CREATIVE</h1>
        <button
          onClick={() => {
            setSlide(true);
          }}
          className="bg-gray-900 px-4 py-1 text-white rounded-lg text-lg cursor-pointer hover:scale-105 hover:shadow-xl ease-in-out transition-transform duration-300 active:scale-95"
        >
          Visit Gallery
        </button>
      </section>
      <section
        className={`flex flex-col absolute w-full h-screen bg-gray-950 z-10 transition-all duration-300 ease-in-out p-8 ${isSlide ? "top-0" : "top-full"}`}
      >
        <div className="w-full">
          <button
            className="bg-gray-900 px-4 py-1 rounded-md text-white text-sm cursor-pointer"
            onClick={() => {
              setSlide(false);
            }}
          >
            ←
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-white">Test Animation</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
