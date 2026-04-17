import React, { useContext } from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { ClickedFriendContext } from "../../context/ClickedFriendContext";

const Stats = () => {

  const {clickedFriend} = useContext(ClickedFriendContext);

  const isAnimationActive = true;

  const counts = {
    Call: 0,
    Text: 0,
    Video: 0
  };

  clickedFriend.forEach(item => {
    counts[item.type]++;
  });

  const data = [
    { name: "Call", value: counts.Call, fill: "#244d3f" },
    { name: "Video", value: counts.Video, fill: "#37a163" },
    { name: "Text", value: counts.Text, fill: "#7f37f5" },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-[90%] lg:w-6xl mx-auto">
        <h3 className="text-5xl font-bold text-[#1F2937] py-10">
          Friendship Analytics
        </h3>
        <div className="bg-white shadow-sm rounded-sm py-10 mb-20">
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "500px",
              margin: "0 auto",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  cornerRadius={10}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={isAnimationActive}
                />
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
