import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: 2022,
    title: "IT Development",
    duration: "1 Years - Current",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex tellus, semper sit amet leo vitae, ultricies convallis massa. Sed iaculis turpis non posuere pretium. Nam risus purus, vulputate at leo et, eleifend posuere lorem. Sed vel nunc imperdiet, aliquam ligula sed, posuere felis. Suspendisse potenti. Nulla rhoncus risus vitae massa faucibus, nec dignissim elit pulvinar. Praesent placerat laoreet ante vitae vehicula. Nam lobortis sodales urna, vitae interdum massa imperdiet vitae. Nunc sodales consequat justo a egestas.",
  },
  {
    year: 2020,
    title: "IT Support",
    duration: "2 Years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex tellus, semper sit amet leo vitae, ultricies convallis massa. Sed iaculis turpis non posuere pretium. Nam risus purus, vulputate at leo et, eleifend posuere lorem. Sed vel nunc imperdiet, aliquam ligula sed, posuere felis. Suspendisse potenti. Nulla rhoncus risus vitae massa faucibus, nec dignissim elit pulvinar. Praesent placerat laoreet ante vitae vehicula. Nam lobortis sodales urna, vitae interdum massa imperdiet vitae. Nunc sodales consequat justo a egestas.",
  },
  {
    year: 2019,
    title: "Intern Engineering",
    duration: "6 Month",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex tellus, semper sit amet leo vitae, ultricies convallis massa. Sed iaculis turpis non posuere pretium. Nam risus purus, vulputate at leo et, eleifend posuere lorem. Sed vel nunc imperdiet, aliquam ligula sed, posuere felis. Suspendisse potenti. Nulla rhoncus risus vitae massa faucibus, nec dignissim elit pulvinar. Praesent placerat laoreet ante vitae vehicula. Nam lobortis sodales urna, vitae interdum massa imperdiet vitae. Nunc sodales consequat justo a egestas.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div className="mx-auto px-4 md:px-0">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
          Work
        </h1>
        {data.map((item, idx) => (
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
