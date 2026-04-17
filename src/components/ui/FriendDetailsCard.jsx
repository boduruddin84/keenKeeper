
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { RiArchiveLine, RiDeleteBinLine } from "react-icons/ri";
import CallImg from "../../assets/images/call.png";
import TextImg from "../../assets/images/text.png";
import VideoImg from "../../assets/images/video.png";
import { useContext } from "react";
import { ClickedFriendContext } from "../../context/ClickedFriendContext";
import { toast } from "react-toastify";



const FriendDetailsCard = ({ expectedFriend }) => {

  const {clickedFriend, setClickedFriend,} = useContext(ClickedFriendContext);

  const statusStyles = {
    "overdue": "bg-[#EF4444] text-[#FFFFFF] ",
    "almost due": "bg-[#EFAD44] text-[#FFFFFF] ",
    "on-track": "bg-[#244D3F] text-[#FFFFFF]",
  };



const handleCall = () => {
  setClickedFriend([...clickedFriend, expectedFriend])
  toast.success(`Call With ${expectedFriend.name}`);
}
const handleText = () => {
  setClickedFriend([...clickedFriend, expectedFriend])
  toast.success(`Text With ${expectedFriend.name}`);
}
const handleVideo = () => {
  setClickedFriend([...clickedFriend, expectedFriend])
  toast.success(`Video With ${expectedFriend.name}`);
}




  return (
    <div className="bg-[#F8FAFC]">
      <div className="lg:flex lg:w-6xl mx-auto py-5">
        <div className="w-[90%] mx-auto lg:w-[30%]">
          <div className="card bg-[#FFFFFF] w-80 shadow-sm ">
            <figure className=" pt-5">
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
          <div className="card bg-[#FFFFFF] w-80 shadow-sm my-2 py-3 text-center">
            <p className="flex justify-center items-center gap-2 text-[16px] font-medium text-[#1F2937]"><HiOutlineBellSnooze /> Snooze 2 weeks</p>
          </div>
          <div className="card bg-[#FFFFFF] w-80 shadow-sm my-2 py-3 text-center">
            <p className="flex justify-center items-center gap-2 text-[16px] font-medium text-[#1F2937]"><RiArchiveLine /> Archive</p>
          </div>
          <div className="card bg-[#FFFFFF] w-80 shadow-sm my-2 py-3 text-center">
            <p className="flex justify-center items-center gap-2 text-[16px] font-medium text-[#EF4444]"><RiDeleteBinLine /> Delete</p>
          </div>
        </div>
        <div className="w-[90%] mx-auto lg:w-[70%]">
            <div className="lg:flex lg:gap-5">
                <div className="card bg-[#FFFFFF] w-70 shadow-sm my-2 py-3 text-center pt-10 pb-5 space-y-2">
                    <h3 className="text-3xl font-semibold text-[#244D3F]">{expectedFriend.days_since_contact}</h3>
                    <p className="text-[18px] text-[#64748B]">Days Since Contact</p>
                </div>
                <div className="card bg-[#FFFFFF] w-70 shadow-sm my-2 py-3 text-center pt-10 pb-5 space-y-2">
                    <h3 className="text-3xl font-semibold text-[#244D3F]">{expectedFriend.goal}</h3>
                    <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
                </div>
                <div className="card bg-[#FFFFFF] w-70 shadow-sm my-2 py-3 text-center pt-10 pb-5 space-y-2">
                    <h3 className="text-3xl font-semibold text-[#244D3F]">{expectedFriend.next_due_date}</h3>
                    <p className="text-[18px] text-[#64748B]">Next Due</p>
                </div>
            </div>
            <div className="card bg-[#FFFFFF] w-full shadow-sm my-2 text-center pt-10 pb-5">
                <div className="flex justify-between px-5">
                    <h4 className="text-[20px] text-[#244D3F] font-medium">Relationship Goal</h4>
                    <button className="btn text-[14px] text-[#1F2937]">Edit</button>
                </div>
                <p className="text-left px-5 text-[18px] text-[#64748B]">
                    Connect every <span className="text-[18px] text-[#1F2937] font-bold">{expectedFriend.days_since_contact} days</span>
                </p>
            </div>
            <div className="card bg-[#FFFFFF] w-full shadow-sm my-2 pl-5 pt-10 pb-5 mt-5">
                <h4 className="text-[20px] text-[#244D3F] font-medium">Relationship Goal</h4>
                <div className="lg:flex gap-5">
                    <button onClick={handleCall} className="btn flex-col mt-3 py-15 px-25">
                        <img className="w-10 h-10" src={CallImg} alt="Call button" />
                        <p className="mt-2 text-[18px] text-[#1F2937]">Call</p>
                    </button>
                    <button onClick={handleText} className="btn flex-col mt-3 py-15 px-25">
                        <img className="w-10 h-10" src={TextImg} alt="Text button" />
                        <p className="mt-2 text-[18px] text-[#1F2937]">Text</p>
                    </button>
                    <button onClick={() => handleVideo()} className="btn flex-col mt-3 py-15 px-25">
                        <img className="w-10 h-10" src={VideoImg} alt="Video button" />
                        <p className="mt-2 text-[18px] text-[#1F2937]">Video</p>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsCard;
