import { useState } from "react";
import "./App.css";
import { FriendsList } from "./FriendList";
import FormSplitBill from "./FormSplitBill";
import AddFriend from "./AddFriend";
import { Button } from "./Button";

function App() {
  const friendList = [
    { id: 1, name: "Mostafa", balance: 10, img: "https://i.pravatar.cc/48" },
    { id: 2, name: "Hassan", balance: 0, img: "https://i.pravatar.cc/45" },
    { id: 3, name: "Omar", balance: -7, img: "https://i.pravatar.cc/40" },
  ];
  const [selected, setSelected] = useState(null);
  const [friends, setFriends] = useState(friendList);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelected(null);
  }
  function handleSelect(friend) {
    setSelected((current) => (current?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }

  function handleSpliteBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <div className="mx-auto">
      <p className="text-center m-4  text-4xl font-mono ">Split The Bill</p>
      <div className="vh-100 md:flex items-center justify-center ">
        <div className="md:w-1/3 mt-5 ">
          <FriendsList
            friends={friends}
            selected={selected}
            handleSelect={handleSelect}
          />
          {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}

          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "close" : "Add Friend"}
          </Button>
        </div>
        <div className="md:w-1/2">
          {selected && (
            <FormSplitBill
              handleSpliteBill={handleSpliteBill}
              selected={selected}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
