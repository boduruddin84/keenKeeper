import FriendsCard from "../components/ui/FriendsCard";
import { HashLoader } from "react-spinners";
import useFriends from "../hooks/useFriends";

const YourFriends = () => {
  
  const { friends, loading } = useFriends();
  

  return (
    <div className="bg-[#F8FAFC] pb-10">
      <div className="w-fit lg:w-6xl mx-auto mb-4">
        <h3 className="text-2xl font-semibold text-[#1F2937]">Your Friends</h3>
      </div>
      {
        loading ? (<div className="flex justify-center items-center">
            <HashLoader />
        </div> ) : ( <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-fit lg:w-6xl mx-auto">
        {friends.map((friend) => {
          return (
            <div key={friend.id}>
              <FriendsCard friend={friend} />
            </div>
          );
        })}
      </div>
    )}
    </div>
  );
};

export default YourFriends;
