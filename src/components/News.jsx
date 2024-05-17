import React from "react";
import { NavLink } from "react-router-dom";
import { FaCompass, FaSchool } from "react-icons/fa";
import { MdHomeWork, MdSportsVolleyball } from "react-icons/md";
import { RiHomeSmileFill } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const iconMap = {
  FaCompass: FaCompass,
  MdHomeWork: MdHomeWork,
  FaSchool: FaSchool,
  RiHomeSmileFill: RiHomeSmileFill,
  MdSportsVolleyball: MdSportsVolleyball,
  BsFillQuestionCircleFill: BsFillQuestionCircleFill
};

const News = ({ newsData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {newsData.map((data, index) => {
        const IconComponent = iconMap[data.icon];
        return (
          <div key={index} className="bg-white overflow-hidden">
            <div className="p-4 flex items-center">
              <div>
                <NavLink
                  to={`/news/${index}`}
                  className="text-xl text-red-700 font-bold mb-2 flex hover:text-blue-600"
                >
                  <div className="mt-0.5 me-2">
                    {IconComponent && <IconComponent />}
                  </div>
                  <div>{data.title}</div>
                </NavLink>
                <p className="text-gray-700 line-clamp-4">{data.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
