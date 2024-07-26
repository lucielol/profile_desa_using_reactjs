import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaCompass, FaSchool } from "react-icons/fa";
import { MdHomeWork, MdSportsVolleyball } from "react-icons/md";
import { RiHomeSmileFill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa6";

import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await axios.get(`api/news`);
    setNews(response.data);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((data, index) => {
        return (
          <div key={index} className="bg-white overflow-hidden">
            <div className="p-4 flex items-center">
              <div>
                <NavLink
                  to={`/news/${data.id}`}
                  className="text-xl text-red-700 font-bold mb-2 flex hover:text-blue-600"
                >
                  <div>{data.title}</div>
                </NavLink>
                <p className="text-gray-700 line-clamp-4">{data.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
