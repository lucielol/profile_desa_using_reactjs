import React, { useEffect, useState } from "react";
import App from "../Templates/App";
import axios from "axios";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import Navbar from "../Templates/Navbar";
import { Button } from "flowbite-react";
import { Label, TextInput, FileInput, Toast } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";

export const HeaderEdit = () => {
  const [content, setContent] = useState(null);
  const [idContent, setIdContent] = useState();
  const [formData, setFormData] = useState({
    title: { url: "", text: "" },
    navs: [],
  });

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [showToast, setShowToast] = useState(false);

  const secretKey = "l630bfaYZQeSXGWMAYKSvaTSD0K7ngd2";
  const encryptedToken = Cookies.get("access_token");

  let decryptedToken = "";

  if (encryptedToken) {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
      decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error("Error decrypting the token:", error);
    }
  }

  const getContent = async () => {
    try {
      const response = await axios.get("/api/content/header", {
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      });

      const contentItem = response.data.content[0]; // Assume first item
      const parsedContent = JSON.parse(contentItem.content);
      setIdContent(contentItem.id); // Store the ID of the content
      setContent(parsedContent);
      setFormData(parsedContent);
    } catch (error) {
      console.error("Error fetching header content:", error);
    }
  };

  useEffect(() => {
    if (decryptedToken) {
      getContent();
    } else {
      console.error("No decrypted token available.");
    }
  }, [decryptedToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNavChange = (index, e) => {
    const { name, value } = e.target;
    const updatedNavs = formData.navs.map((nav, i) =>
      i === index ? { ...nav, [name]: value } : nav
    );
    setFormData((prevState) => ({
      ...prevState,
      navs: updatedNavs,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(idContent);
      await axios.put(`/api/content/header/${idContent}`, formData, {
        headers: {
          Authorization: `Bearer ${decryptedToken}`,
        },
      });
      setToastMessage("Header updated successfully!");
      setToastType("success");
      setShowToast(true);
    } catch (error) {
      console.error("Error updating header:", error);
      setToastMessage("Failed to update header");
      setToastType("error");
      setShowToast(true);
    }
  };

  return (
    <>
      <App>
        <Navbar>Edit Header</Navbar>
        <main className="flex-1 justify-center p-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            {content ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <Label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="logo"
                  >
                    Logo
                  </Label>
                  <FileInput id="logo" />
                </div>
                <div className="mb-5">
                  <Label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </Label>
                  <TextInput
                    type="text"
                    id="base-input"
                    name="title.text"
                    value={formData.title.text}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-5">
                  <div className="grid grid-cols-2 gap-4">
                    <Label
                      htmlFor="small-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nav Title
                    </Label>
                    <Label
                      htmlFor="small-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Href
                    </Label>
                  </div>
                  {formData.navs.map((nav, index) => (
                    <div className="grid grid-cols-2 gap-4 mb-4" key={index}>
                      <TextInput
                        type="text"
                        id={`nav-title-${index}`}
                        name="title"
                        value={nav.title}
                        onChange={(e) => handleNavChange(index, e)}
                      />
                      <TextInput
                        type="text"
                        id={`nav-url-${index}`}
                        name="url"
                        value={nav.url}
                        onChange={(e) => handleNavChange(index, e)}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <Button type="submit" color="success">
                    Simpan
                  </Button>
                </div>
              </form>
            ) : (
              <p>Loading content...</p>
            )}
          </div>
        </main>
        {showToast && (
          <Toast
            className="fixed top-5 w-auto right-5 border border-gray-300 shadow-md"
            onClick={() => setShowToast(false)}
          >
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
              {toastType === "success" ? (
                <HiCheck className="text-green-500 w-5 h-5" />
              ) : (
                <HiX className="text-red-500 w-5 h-5" />
              )}
            </div>
            <div className="ml-3 text-sm font-normal">{toastMessage}</div>
            <Toast.Toggle />
          </Toast>
        )}
      </App>
    </>
  );
};

export default HeaderEdit;
