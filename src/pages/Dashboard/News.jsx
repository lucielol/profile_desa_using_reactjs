import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "../Templates/App";
import Navbar from "../Templates/Navbar";
import { Button, Card, Spinner } from "flowbite-react";
import AddNews from "./components/AddNews";
import EditNews from "./components/EditNews";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get("api/admin/news");
      setNews(response.data);
    } catch (error) {
      console.error("There was an error fetching the news!", error);
    }
  };

  const deleteNews = async (id) => {
    try {
      await axios.delete(`api/admin/news/${id}`);
      getNews();
      toast.success("Berita telah dihapus!");
    } catch (error) {
      console.error("There was an error deleting the news!", error);
      toast.error("Failed to delete news.");
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <App>
      <Navbar>Manage News</Navbar>
      <main className="px-6">
        <div className="mb-4">
          <AddNews getNews={getNews} />
        </div>
        {news.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 me-6 mb-6">
            {news.map((item, index) => (
              <Card key={index} className="max-w-sm">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                  {item.content}
                </p>
                <div className="flex space-x-2">
                  <EditNews newsItem={item} getNews={getNews} />
                  <Button color="failure" onClick={() => deleteNews(item.id)}>
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-[5rem] max-h-screen flex justify-center items-center overflow-hidden">
            <Spinner size="xl" />
          </div>
        )}
      </main>
      <ToastContainer />
    </App>
  );
};

export default News;
