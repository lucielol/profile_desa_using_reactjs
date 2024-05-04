import React from "react";

const ProgressBar = ({ value, title }) => {
  return (
    <div className="w-full">
      <h2 className="text-1xl mb-3">{title}</h2>
      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full text-center text-white leading-4 text-sm/[5px] transition-all duration-500"
          style={{ width: `${value}%` }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
