import React from "react";
import ContactUs from "./ContactUs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="px-5 py-5 md:px-10 lg:px-28 sm:py-7">
        <h1 className="text-center text-4xl mb-10">Kontak Kami</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center bg-slate-500/50 my-10 border-t-8 border-b-8 border-red-600 p-5">
            <div className="text-3xl sm:text-5xl md:text-4xl text-center mb-7">Desa Dompyong Kulon</div>
            <div className="text-xl text-center">Kabupaten Cirebon</div>
            <div className="flex space-x-4 mt-10">
              <a className="hover:text-gray-300" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a className="hover:text-gray-300" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a className="hover:text-gray-300" href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>
          <div>
            <ContactUs />
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-700/70 w-full p-3">
        &copy; Copyright <span className="font-bold">Desa Dompyong Kulon</span>
      </div>
    </footer>
  );
};

export default Footer;
