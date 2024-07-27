import React, { useEffect, useState } from "react";
import App from "../Templates/App";
import axios from "axios";
import Navbar from "../Templates/Navbar";
import { Button, Modal, FileInput, Spinner } from "flowbite-react";

export const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await axios.get("api/admin/gallery");
        setGallery(response.data);
      } catch (error) {
        console.error("Error fetching gallery data: ", error);
      }
    };

    getGallery();
  }, []);

  return (
    <App>
      <Navbar>Manage Gallery</Navbar>
      <main className="px-6">
        {gallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="relative rounded-lg border border-slate-500 mb-2 overflow-hidden group"
              >
                <img
                  className="rounded-lg w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  src={item.img}
                  alt={item.alt}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button.Group outline className="shadow">
                    <Button
                      color="info"
                      onClick={() => window.open(item.img, "_blank")}
                    >
                      View
                    </Button>
                    <Button color="success" onClick={() => setOpenModal(true)}>
                      Edit
                    </Button>
                    <Button color="failure" onClick={() => setOpenModal(true)}>
                      Delete
                    </Button>
                  </Button.Group>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-[5rem] max-h-screen flex justify-center items-center overflow-hidden">
            <Spinner size="xl" />
          </div>
        )}
      </main>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Edit Gallery</Modal.Header>
        <Modal.Body>
          <h1 className="text-2xl">Coming Soon...</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </App>
  );
};
