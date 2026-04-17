import React from 'react'
import { useParams } from 'react-router'
import useFriends from '../hooks/useFriends';
import { HashLoader } from 'react-spinners';
import FriendDetailsCard from '../components/ui/FriendDetailsCard';



const FriendDetails = () => {

  const { id } = useParams();
 
  const { friends, loading } = useFriends();

  const expectedFriend = friends?.find(friend => String(friend.id) === id );
  
  
  return (
    <div>
      {loading ? (<div className="flex justify-center items-center">
            <HashLoader />
        </div> ) : (<FriendDetailsCard expectedFriend={expectedFriend} /> )}
    </div>
  )
}

export default FriendDetails