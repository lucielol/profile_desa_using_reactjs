import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import dompyong from "../assets/images/dompyong-kulon.jpg";
import { Spinner } from "flowbite-react"; // Import Spinner component

export const NewsPage = () => {
  const { uuid } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await axios.get(`/api/news/${uuid}`);
        setNewsItem(response.data);
      } catch (error) {
        console.error("There was an error fetching the news item!", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchNewsItem();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [uuid]);

  if (loading) {
    return (
      <div
        className="relative h-screen flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${dompyong})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center">
          <Spinner aria-label="Loading spinner example" size="xl" />
          <span className="text-white mt-4">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1">
          <div id="home" className="relative">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 flex items-center text-white">
              <div className="mx-7 md:mx-20 w-full text-left">
                <div className="mb-8">
                  <Link
                    to="/"
                    state={{ id: "news" }}
                    className="text-2xl w-auto hover:text-blue-500 flex"
                  >
                    <span className="mt-1 me-2">
                      <FaArrowLeft />
                    </span>
                    Kembali
                  </Link>
                </div>
                <div className="bg-slate-700/50 p-7 rounded-xl backdrop-blur-lg">
                  <h1 className="text-xl sm:text-2xl mb-5">{newsItem.title}</h1>
                  <p>{newsItem.content}</p>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-center w-full h-screen"
              style={{
                backgroundImage: `url(${dompyong})`,
              }}
            ></div>
          </div>
        </div>
      </Layout>
    </>
  );
};
