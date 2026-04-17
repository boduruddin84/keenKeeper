import React, { useState } from 'react'
import { ClickedFriendContext } from './ClickedFriendContext';


 const ClickedFriendProvider = ({children}) => {


    const [clickedFriend, setClickedFriend] = useState([]);

    const data = {
    clickedFriend, 
    setClickedFriend,
    };

  return (
    <ClickedFriendContext.Provider value={data}>{children}</ClickedFriendContext.Provider>
  )
}

export default ClickedFriendProvider