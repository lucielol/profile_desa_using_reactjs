import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, TextInput, Textarea, Spinner } from "flowbite-react";
import { FaNewspaper } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNews = ({ getNews }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const icon = "FaRegNewspaper";

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post("api/admin/news", {
        title,
        content,
        icon,
      });
      setShowModal(false);
      getNews();
      toast.success("Berhasil update berita!");
    } catch (error) {
      console.error("There was an error creating the news!", error);
      toast.error("Failed to add news.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Add News</Button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Add News</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <TextInput
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              id="content"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={7}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>
            {loading ? (
              <>
                <Spinner aria-label="Spinner button example" size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Add"
            )}
          </Button>
          <Button color="failure" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNews;
