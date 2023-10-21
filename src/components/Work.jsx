import React from "react";
import { dataWork } from "../utils/Index";
import Workitem from "./Workitem";

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="mx-auto px-4 md:px-0">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
          Work
        </h1>
        {dataWork.map((item, idx) => (
          <Workitem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
