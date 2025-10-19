import React from "react";

const PictureFrame = ({ images }) => {
  if (!images || images.length < 6) {
    console.error("Please provide at least 6 images!");
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {/* First image spans 2 columns */}
      <div className="col-span-2 h-64 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={images[0]}
          alt="Image 1"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Next two images */}
      <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={images[1]}
          alt="Image 2"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={images[2]}
          alt="Image 3"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Last image spans 2 columns */}
      <div className="col-span-2 h-64 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={images[3]}
          alt="Image 4"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Optional extra images */}
      <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={images[4]}
          alt="Image 5"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">
        <img
          src={images[5]}
          alt="Image 6"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default PictureFrame;
