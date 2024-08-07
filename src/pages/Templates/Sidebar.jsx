import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome, IoMdImages, IoMdPaper, IoMdSettings } from "react-icons/io";
import { Button, Modal } from "flowbite-react";
import { RiProgress5Fill } from "react-icons/ri";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <aside className="fixed w-64 h-full bg-white dark:bg-gray-800 shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Dashboard
        </h2>
      </div>
      <nav className="mt-3">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <IoMdHome className="mr-2" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/gallery"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <IoMdImages className="mr-2" />
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/news"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <IoMdPaper className="mr-2" />
              Berita
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/progress"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <RiProgress5Fill className="mr-2" />
              Progress
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => setShowModal(true)}
              className="flex w-full items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <IoMdSettings className="mr-2" />
              Settings
            </button>
          </li>
        </ul>
      </nav>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Setting</Modal.Header>
        <Modal.Body>
          <h1 className="text-2xl">Coming Soon...</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </aside>
  );
};

export default Sidebar;
