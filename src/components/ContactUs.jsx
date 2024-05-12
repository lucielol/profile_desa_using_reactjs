import React, { useState } from "react";

const ContactUs = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNama("");
    setEmail("");
    setPesan("");
  };
  return (
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
  );
};

export default ContactUs;
