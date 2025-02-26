import { useState } from "react";
import { Friends } from "./Friends"
export function FriendsList({
  friends,
  selected,
  handleSelect,
}) {
  return (
    
      <ul className="font-medium">
        {friends.map((friend) => (
          <Friends
            friend={friend}
            key={friend.id}
            handleSelect={handleSelect}
            selected={selected}
          />
        ))}
      </ul>
   
  );
}
