import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { ImVideoCamera } from "react-icons/im";

const TimelineCard = ({ clicked }) => {

  const iconMap = {
    Call: <IoCall size="3em" />,
    Text: <IoMdText size="3em" />,
    Video: <ImVideoCamera size="3em" />,
  };

  return (
    <div>
      <div className="flex gap-4 bg-white shadow-sm px-5 py-10 rounded-sm mb-5">
        
          {iconMap[clicked.type]}
        
        <div>
          <p className="text-[18px] text-[#64748B]">
            {clicked.title}
          </p>
          <p>{clicked.date}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
