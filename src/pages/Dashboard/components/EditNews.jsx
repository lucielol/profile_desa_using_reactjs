import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, TextInput, Textarea, Spinner } from "flowbite-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditNews = ({ newsItem, getNews }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(newsItem.title);
  const [content, setContent] = useState(newsItem.content);
  const [loading, setLoading] = useState(false);
  const icon = "FaRegNewspaper";

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.put(`api/admin/news/${newsItem.id}`, {
        title,
        content,
        icon,
      });
      setShowModal(false);
      getNews();
      toast.success("Berita telah diupdate!");
    } catch (error) {
      console.error("There was an error updating the news!", error);
      toast.error("Failed to update news.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Edit</Button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Edit News</Modal.Header>
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
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? (
              <>
                <Spinner aria-label="Spinner button example" size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Save"
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

export default EditNews;
