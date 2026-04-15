import React from "react";

const AddFriend = () => {
  return (
    <div className="bg-[#F8FAFC] pb-10">
      <div className="text-center pt-15 pb-5 space-y-5">
        <h3 className="text-2xl md:text-5xl font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h3>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white px-4 py-2 rounded-sm">
          + Add a Friend
        </button>
      </div>
      <div className="w-fit lg:w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <div className="ml-5 md:ml-1 rounded-sm py-10 w-70 card bg-[#FFFFFF] card-md shadow-sm">
          <div className="card-body text-center">
            <h4 className="text-[#244D3F] text-3xl font-semibold mb-3">8</h4>
            <p className="text-[#64748B] text-[16px]">Total Friends</p>
          </div>
        </div>
        <div className="ml-5 md:ml-1 rounded-sm py-10 w-70 card bg-[#FFFFFF] card-md shadow-sm">
          <div className="card-body text-center">
            <h4 className="text-[#244D3F] text-3xl font-semibold mb-3">3</h4>
            <p className="text-[#64748B] text-[16px]">On Track</p>
          </div>
        </div>
        <div className="ml-5 md:ml-1 rounded-sm py-10 w-70 card bg-[#FFFFFF] card-md shadow-sm">
          <div className="card-body text-center">
            <h4 className="text-[#244D3F] text-3xl font-semibold mb-3">6</h4>
            <p className="text-[#64748B] text-[16px]">Need Attention</p>
          </div>
        </div>
        <div className="ml-5 md:ml-1 rounded-sm py-10 w-70 card bg-[#FFFFFF] card-md shadow-sm">
          <div className="card-body text-center">
            <h4 className="text-[#244D3F] text-3xl font-semibold mb-3">8</h4>
            <p className="text-[#64748B] text-[16px]">Interactions This Month</p>
          </div>
        </div>
      </div>
      <hr className="lg:w-6xl mx-auto mt-10 text-[#E9E9E9]" />
    </div>
  );
};

export default AddFriend;
