import React from "react";

const ProgressBar = ({ value, title }) => {
  return (
    <div className="w-full">
      <div className="truncate">
        <h2 className="text-xl sm:text-2xl mb-3">{title}</h2>
      </div>
      <div className="w-full bg-gray-200 h-6 sm:h-7 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full text-center text-white leading-6 sm:leading-7 text-sm/[5px] transition-all duration-500"
          style={{ width: `${value}%` }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
