import React, { useEffect, useState } from "react";
import App from "../Templates/App";
import axios from "axios";
import Navbar from "../Templates/Navbar";
import { Table, Button, Modal, TextInput, Spinner } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Progress = () => {
  const [progress, setProgress] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [title, setTitle] = useState("");
  const [percentage, setPercentage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getProgress = async () => {
    const response = await axios.get("api/admin/progress");
    setProgress(response.data);
  };

  useEffect(() => {
    getProgress();
  }, []);

  const handleEditClick = (item) => {
    setEditItem(item);
    setTitle(item.title);
    setPercentage(item.percentage);
    setShowModal(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await axios.put(`api/admin/progress/${editItem.id}`, {
        title,
        percentage,
      });
      setShowModal(false);
      getProgress();
      toast.success("Progress berhasil diupdate !");
    } catch (error) {
      console.error("There was an error updating the progress!", error);
      toast.error("Progress gagal diupdate !");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <App>
        <Navbar>Manage Progress</Navbar>
        <main className="px-6">
          <Table>
            <Table.Head>
              <Table.HeadCell>Judul</Table.HeadCell>
              <Table.HeadCell>Persentase</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {progress.map((item, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{item.title}</Table.Cell>
                  <Table.Cell>{item.percentage}%</Table.Cell>
                  <Table.Cell>
                    <Button size="xs" onClick={() => handleEditClick(item)}>
                      Edit
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </main>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Modal.Header>Edit Progress</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <TextInput
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextInput
                id="percentage"
                type="number"
                placeholder="Percentage"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSave} disabled={isLoading}>
              {isLoading && (
                <Spinner aria-label="Spinner button example" size="sm" />
              )}
              <span className="pl-2">Save</span>
            </Button>
            <Button color="failure" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <ToastContainer />
      </App>
    </div>
  );
};

export default Progress;
