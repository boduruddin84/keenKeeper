import React, { useEffect, useState } from "react";

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriendsData = async () => {
      const res = await fetch("/data.json");
      const friendsDetailsData = await res.json();
      setFriends(friendsDetailsData);
      setLoading(false);
    };
    fetchFriendsData();
  }, []);

  return {friends, loading};
};

export default useFriends;
