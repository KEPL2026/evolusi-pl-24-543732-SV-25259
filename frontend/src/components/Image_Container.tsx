interface Image_ContainerProps {
  imageUrl: string;
  Kategori?: string;
  Acara?: string;
}

function Image_Container({
  imageUrl,
  Kategori = "photo/video",
  Acara = "GAMABAND X GMCO",
}: Image_ContainerProps) {
  return (
    <div className="group w-full h-64 border-2 border-white rounded-lg overflow-hidden relative cursor-pointer hover:shadow-xl ease-in-out transition-transform duration-300 active:scale-95">
      <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-between items-start text-white  transition-all duration-300 opacity-100 *:group-hover:opacity-0">
        <div className="px-4 py-2">
          <span className="bg-white-30 bg-clip-padding backdrop-filter backdrop-blur-[2px] inset-shadow-xs inset-shadow-white/80  bg-opacity-30 px-2 py-1 rounded-lg text-sm border border-white/30">
            {Kategori}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center w-full bg-linear-to-t from-black to-black/0 px-4 py-2">
          <span>{Acara}</span>
          <span className="text-sm">view detail →</span>
        </div>
      </div>
      <img
        src={imageUrl}
        alt="Image"
        className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-300 ease-in-out"
      />
    </div>
  );
}

export default Image_Container;
