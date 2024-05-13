import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        selectedImage &&
        e.target.className.includes("fixed") &&
        !e.target.className.includes("max-w-3xl")
      ) {
        handleCloseModal();
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [selectedImage]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg relative">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
          />
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white transition duration-300 ease-in-out"
            onClick={() => handleImageClick(image)}
          >
            {image.alt}
          </div>
        </div>
      ))}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md">
          <div className="max-w-3xl mx-auto">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto"
            />
            <button
              className="absolute top-0 right-0 m-4 text-white hover:text-gray-300"
              onClick={handleCloseModal}
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
