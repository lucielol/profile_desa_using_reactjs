import React, { useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ContactUs = () => {
  const [nama,  setNama]  = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [popup, setPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopup(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nama" className="block text-white font-bold mb-2">
            Nama
          </label>
          <input
            type="text"
            id="nama"
            className="shadow appearance-none border-0 rounded-lg w-full py-2 px-3 bg-gray-700 text-gray-400 leading-tight focus:outline-none focus:ring-2"
            placeholder="Masukkan nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border-0 rounded-lg w-full py-2 px-3 bg-gray-700 text-gray-400 leading-tight focus:outline-none focus:ring-2"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="pesan" className="block text-white font-bold mb-2">
            Pesan
          </label>
          <textarea
            id="pesan"
            className="shadow appearance-none border-0 rounded-lg h-40 w-full py-2 px-3 bg-gray-700 text-gray-400 leading-tight focus:outline-none focus:ring-2"
            rows="4"
            placeholder="Masukkan pesan"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 w-full md:w-auto uppercase"
            type="submit"
          >
            kirim
          </button>
        </div>
      </form>
      {popup && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-80 backdrop-blur-lg z-50">
          <div ref={popupRef} className="bg-white w-72 p-6 rounded-lg relative">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => setPopup(false)}
            >
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-gray-700 text-xl font-semibold">
              Pesan berhasil dikirim!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
