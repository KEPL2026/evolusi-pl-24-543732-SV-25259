import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Image_Container from "./components/Image_Container";
import { ImagesAPI } from "./api/ImagesAPI";

interface ImageItem {
  id: number;
  cdn_url: string;
  createAt: string;
}

function App() {
  const [isSlide, setSlide] = useState(false);
  const [recentWork, setRecentWork] = useState<ImageItem[]>([]);
  const skills = [
    "Event Documentation",
    "Website Development",
    "Graphic Design",
    "Video Editor",
  ];

  const fetchRecentWork = async () => {
    try {
      const response = await ImagesAPI.getRecentImages();
      setRecentWork(response);
    } catch (error) {
      console.error("Error fetching recent work:", error);
    }
  };

  useEffect(() => {
    fetchRecentWork();
  }, []);

  const n = 4;
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
        className={`flex flex-col items-start absolute w-full h-screen bg-gray-900 z-10 transition-all duration-300 ease-in-out py-10 px-16 gap-11
          ${isSlide ? "top-0" : "top-full"}`}
      >
        <Header />
        {/* Recent Work Section */}
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <h2 className="text-white">Recent Work :</h2>
          <div className="grid grid-cols-4 gap-4 my-8">
            {Array.from({ length: n }).map((_, index) => (
              <Image_Container key={index} imageUrl={recentWork[0]?.cdn_url} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-center text-white cursor-pointer underline-offset-0 hover:underline hover:underline-offset-4 ease-in-out transition-all duration-300">
              View all project →
            </p>
          </div>
        </div>
        <div className="flex flex-row border-t border-white w-full h-full">
          <div className="flex flex-col items-center justify-center border-r border-white w-1/2 text-4xl p-20 h-full text-white">
            <p className="w-3/4">
              Service that Bringing your problem into different way
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center p-10">
            {skills.map((skill, index) => (
              <div
                className="flex flex-row gap-4   items-center justify-start w-full"
                key={index}
              >
                <span className="bg-black rounded-full px-4 py-2 border border-white shadow-xl text-white">
                  {index + 1}
                </span>
                <p className="text-white text-[24px]">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
