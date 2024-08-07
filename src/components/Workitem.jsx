import React from "react";

const Workitem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 px-4">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-star text-xs md:text-xs">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-indigo-900 rounded-md">
            {year}
          </span>
          <span className="text-lg font-bold text-indigo-900">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-semibold text-stone-500 text-justify">
          {details}
        </p>
      </li>
    </ol>
  );
};

export default Workitem;
