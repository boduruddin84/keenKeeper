import React, { useContext, useState } from "react";
import { ClickedFriendContext } from "../../context/ClickedFriendContext";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  const { clickedFriend } = useContext(ClickedFriendContext);

  const [filterType, setFilterType] = useState("all");

  const filteredTimeline =
    filterType === "all"
      ? clickedFriend
      : clickedFriend.filter((item) => item.type === filterType);

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-6xl mx-auto">
        <div>
          <h2 className="pl-2 lg:pl-0 text-5xl text-[#1F2937] font-bold pt-20 pb-10">
            Timeline
          </h2>
        </div>
        <div className="flex gap-3 mb-6">
          <div className="dropdown dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 text-[18px] text-[#64748B]"
            >
              Filter timeline ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a
                  onClick={() => setFilterType("all")}
                  className={`px-4 py-2 rounded-full text-[18px] text-[#64748B] ${
                    filterType === "all"
                      ? "bg-[#244D3F] text-white"
                      : "bg-white shadow"
                  }`}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  onClick={() => setFilterType("Call")}
                  className={`px-4 py-2 rounded-full text-[18px] text-[#64748B] ${
                    filterType === "Call"
                      ? "bg-[#244D3F] text-white"
                      : "bg-white shadow"
                  }`}
                >
                  Call
                </a>
              </li>
              <li>
                <a
                  onClick={() => setFilterType("Text")}
                  className={`px-4 py-2 rounded-full text-[18px] text-[#64748B] ${
                    filterType === "Text"
                      ? "bg-[#244D3F] text-white"
                      : "bg-white shadow"
                  }`}
                >
                  Text
                </a>
              </li>
              <li>
                <a
                  onClick={() => setFilterType("Video")}
                  className={`px-4 py-2 rounded-full text-[18px] text-[#64748B] ${
                    filterType === "Video"
                      ? "bg-[#244D3F] text-white"
                      : "bg-white shadow"
                  }`}
                >
                  Video
                </a>
              </li>
            </ul>
          </div>
        </div>
        {filteredTimeline.length === 0 ? (
          <p className="text-2xl lg:text-6xl bg-[#FFFFFF] shadow-sm rounded-sm text-gray-500 lg:text-center pl-20 lg:pl-0 py-20 lg:py-50 mb-10">No entries found</p>
        ) : (
          <div>
            {filteredTimeline.map((clicked, ind) => {
              return (
                <div key={ind}>
                  <TimelineCard clicked={clicked} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
