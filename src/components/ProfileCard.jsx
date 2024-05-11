import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Contoh penggunaan Font Awesome Icons

const ProfileCard = ({ image, name, description }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border p-6">
      <div className="flex justify-center">
        <img
          className="w-48 h-48 object-cover rounded-full"
          src={image}
          alt={name}
        />
      </div>
      <div className="mt-5 text-center">
        <div className="mb-2">
          <div className="font-bold text-xl uppercase">{name}</div>
          <div className="text-gray-700 text-base">{description}</div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <span className="inline-block bg-gray-300 hover:bg-gray-400/70 hover:cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
          <FaFacebook className="inline-block mr-1" /> Facebook
        </span>
        <span className="inline-block bg-gray-300 hover:bg-gray-400/70 hover:cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
          <FaInstagram className="inline-block mr-1" /> Instagram
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
