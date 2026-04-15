import React from "react";

const FriendsCard = ({ friend }) => {
  const statusStyles = {
    "overdue": "bg-[#EF4444] text-[#FFFFFF] ",
    "almost due": "bg-[#EFAD44] text-[#FFFFFF] ",
    "on-track": "bg-[#244D3F] text-[#FFFFFF]",
  };

  return (
    <div className="ml-5 md:ml-1">
      <div className="card bg-[#FFFFFF] w-70 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={friend.picture} className="rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[20px] text-[#1F2937]">
            {friend.name}
          </h2>
          <p className="text-[12px] text-[#64748B]">
            {friend.days_since_contact}d ago
          </p>
          <p>
            {friend.tags.map((tag, ind) => (
              <button
                className="btn bg-[#CBFADB] rounded-full ml-2 text-[#244D3F] text-[12px] font-medium"
                key={ind}
              >
                {tag}
              </button>
            ))}
          </p>
          <div className="mt-2">
            <p
              className={`px-3 py-1 rounded-full text-[12px] font-medium ${
                statusStyles[friend.status]
              }`}
            >
              {friend.status}
            </p>
          </div>
          <div className="card-actions">
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
