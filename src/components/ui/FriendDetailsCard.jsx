import React from "react";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { RiArchiveLine, RiDeleteBinLine } from "react-icons/ri";

const FriendDetailsCard = ({ expectedFriend }) => {
  const statusStyles = {
    overdue: "bg-[#EF4444] text-[#FFFFFF] ",
    "almost due": "bg-[#EFAD44] text-[#FFFFFF] ",
    "on-track": "bg-[#244D3F] text-[#FFFFFF]",
  };

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-6xl mx-auto py-5">
        <div className="w-[30%]">
          <div className="card bg-[#FFFFFF] w-70 shadow-sm ">
            <figure className="px-10 pt-10">
              <img src={expectedFriend.picture} className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[20px] text-[#1F2937]">
                {expectedFriend.name}
              </h2>
              <div className="mt-2">
                <p
                  className={`px-3 py-1 rounded-full text-[12px] font-medium ${
                    statusStyles[expectedFriend.status]
                  }`}
                >
                  {expectedFriend.status}
                </p>
              </div>
              <p>
                {expectedFriend.tags.map((tag, ind) => (
                  <button
                    className="btn bg-[#CBFADB] rounded-full ml-2 text-[#244D3F] text-[12px] font-medium"
                    key={ind}
                  >
                    {tag}
                  </button>
                ))}
              </p>
              <p className="text-[12px] text-[#64748B]">{expectedFriend.bio}</p>
              <div className="card-actions"></div>
            </div>
          </div>
          <div className="card bg-[#FFFFFF] w-70 shadow-sm my-2 py-3 text-center">
            <p className="flex justify-center items-center gap-2 text-[16px] font-medium text-[#1F2937]"><HiOutlineBellSnooze /> Snooze 2 weeks</p>
          </div>
          <div className="card bg-[#FFFFFF] w-70 shadow-sm my-2 py-3 text-center">
            <p className="flex justify-center items-center gap-2 text-[16px] font-medium text-[#1F2937]"><RiArchiveLine /> Archive</p>
          </div>
          <div className="card bg-[#FFFFFF] w-70 shadow-sm my-2 py-3 text-center">
            <p className="flex justify-center items-center gap-2 text-[16px] font-medium text-[#EF4444]"><RiDeleteBinLine /> Delete</p>
          </div>
        </div>
        <div className="w-[70%]">

        </div>
      </div>
    </div>
  );
};

export default FriendDetailsCard;
