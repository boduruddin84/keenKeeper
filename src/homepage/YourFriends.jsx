import React, { use, useEffect } from 'react'


const YourFriends = () => {

    useEffect(() => {
        const fetchFriendsData = async () => {
            const res = await fetch("/data.json");
            const friendsDetailsData = await res.json();
            console.log(friendsDetailsData);
            
        };
        fetchFriendsData();
    },[]);
    

  return (
    <div className='bg-[#F8FAFC] pb-10'>
        <div className='w-fit lg:w-6xl mx-auto'>
            <h3 className='text-2xl font-semibold text-[#1F2937]'>Your Friends</h3>
        </div>
    </div>
  )
}

export default YourFriends