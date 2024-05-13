import React from "react";
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="px-5 py-5 sm:px-28 sm:py-7">
        <div className="text-center mb-6">
          <h1 className="text-3xl">Kontak Kami</h1>
        </div>
        <ContactUs />
      </div>
      <div className="text-center border-t border-gray-700/70 w-full p-3">
        &copy; Copyright Desa Dompyong Kulon<br />
        Designed by Kelompok 10
      </div>
    </footer>
  );
};

export default Footer;
