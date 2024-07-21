import React, { useEffect, useState } from "react";
import App from "../Templates/App";
import axios from "axios";
import Navbar from "../Templates/Navbar";
import { Button, Modal, FileInput, Spinner } from "flowbite-react";

export const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await axios.get("api/content/gallery");
        setGallery(response.data);
      } catch (error) {
        console.error("Error fetching gallery data: ", error);
      }
    };

    getGallery();
  }, []);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleFileChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const handleUpdate = async () => {
    if (!newImage || !selectedItem) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("img", newImage);
    formData.append("alt", "foto 1");

    try {
      await axios.post(
        `api/content/gallery/update/${selectedItem.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const response = await axios.get("api/content/gallery");
      setGallery(response.data);
      // setOpenModal(false);
      // setNewImage(null);
    } catch (error) {
      console.error("Error updating gallery image: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <App>
      <Navbar>Edit Gallery</Navbar>
      <main className="px-6">
        <h1>Gallery</h1>
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
                    <Button
                      color="success"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </Button>
                    <Button color="failure">Delete</Button>
                  </Button.Group>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Edit Gallery</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {selectedItem && (
              <img
                src={selectedItem.img}
                className="w-full"
                alt={selectedItem.alt}
              />
            )}
            <div>
              <div className="mb-2 block">
                <FileInput id="file-upload" onChange={handleFileChange} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleUpdate} disabled={loading}>
            {loading ? (
              <div className="flex items-center">
                <Spinner aria-label="Spinner button example" size="sm" />
                <span className="pl-3">Updating...</span>
              </div>
            ) : (
              "Update"
            )}
          </Button>
          <Button color="failure" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </App>
  );
};
