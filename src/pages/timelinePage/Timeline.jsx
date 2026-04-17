import React, { useContext } from "react";
import { ClickedFriendContext } from "../../context/ClickedFriendContext";
import TimelineCard from "./TimelineCard";

const Timeline = () => {

  const {clickedFriend} = useContext(ClickedFriendContext);

  

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-6xl mx-auto">
        <div>
          <h2 className="text-5xl text-[#1F2937] font-bold pt-20 pb-10">Timeline</h2>
        </div>
        {
          clickedFriend.map((clicked, ind) => {
            return <div key={ind}>
              <TimelineCard clicked={clicked} />
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Timeline;
