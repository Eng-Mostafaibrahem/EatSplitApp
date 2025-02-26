import { useState } from "react";
import { Button } from "./Button";

export default function AddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [friendBalance, setFriendBalance] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();

    if (!friendName || !friendBalance) return;
    const newFriend = {
      id,
      name: friendName,
      balance: friendBalance,
      img: image,
    };
    onAddFriend(newFriend);
    setFriendName("");
    setFriendBalance("");
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-orange-100 mt-2">
      <div className="mb-3">
        {handleSubmit}
        <label
          htmlFor="Friend Name"
          className="block ms-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Friend Name
        </label>
        <input
          type="text"
          id="FriendName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="Balance"
          className="block ms-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Balance
        </label>
        <input
          type="text"
          id="Balance"
          placeholder="100"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={friendBalance}
          onChange={(e) => setFriendBalance(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="image"
          className="block ms-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          image
        </label>
        <input
          type="text"
          id="image"
          placeholder="https://i.pravatar.cc/48"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <Button>Add</Button>
    </form>
  );
}
