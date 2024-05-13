import React from "react";
import { NavLink } from "react-router-dom";

const News = ({ newsData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {newsData.map((data, index) => (
        <div key={index} className="bg-white overflow-hidden">
          <div className="p-4 flex items-center">
            <div>
              <NavLink to='#' className="text-xl text-red-700 font-bold mb-2 flex hover:text-blue-600">
                <div className="mt-0.5 me-2">{data.icon}</div>
                <div>{data.title}</div>
              </NavLink>
              <p className="text-gray-700">{data.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
