import { Button } from "./Button";

export function Friends({ friend, selected, handleSelect }) {
  const isSelected = friend?.id === selected?.id;
  return (
    <li className=" flex justify-between items-center hover:bg-orange-200 m-2 ">
      <div className=" w-1/5 mx-3  overflow-auto">
        <img className="w-100 " src= {friend.img} alt="avatar" />
      </div>
      <div className=" w-2/5 ">
        <h2>{friend.name}</h2>
        {friend.balance > 0 && (
          <p className="text-lime-500">
            You owe {friend.name} {friend.balance} ${" "}
          </p>
        )}
        {friend.balance < 0 && (
          <p className="text-red-500">
            {" "}
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance == 0 && (
          <p className="text-gray-400"> you and {friend.name} are even</p>
        )}
      </div>

      <Button onClick={() => handleSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
