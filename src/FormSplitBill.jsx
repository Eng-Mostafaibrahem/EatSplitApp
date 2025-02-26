import React, { useState } from "react";
import { Button } from "./Button";

export default function FormSplitBill({ selected, handleSpliteBill }) {
  const [bill, setBill] = useState("");
  const [paiedByUser, setpaiedByUser] = useState("");
  const [whoIsPaied, setwhoIsPaied] = useState("user");
  const paidByFriend = bill ? bill - paiedByUser : "";

  function handleSubmite(e) {
    e.preventDefault();
    if (!bill || !paiedByUser) return;
    handleSpliteBill(whoIsPaied === "user" ? paidByFriend : -paiedByUser);
    setBill("");
    setpaiedByUser("");
    setwhoIsPaied("user");
  }

  return (
    <>
      <form
        form
        onSubmit={handleSubmite}
        className=" bg-orange-200 rounded-2xl md:w-100"
      >
        <h2 className="text-2xl m-4">SPLIT A BILL WITH {selected.name}</h2>
        <div className="md:md:flex justify-center mb-2 ">
          <label
            htmlFor="BillValue"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white w-1/2"
          >
            Bill Value
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <div className="md:flex justify-center mb-2 ">
          <label
            htmlFor=" YourExpense"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white w-1/2"
          >
            Your Expense
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={paiedByUser}
            onChange={(e) => setpaiedByUser(Number(e.target.value))}
          />
        </div>
        <div className="md:md:flex justify-center mb-2 ">
          <label
            htmlFor="friendExpense"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white w-1/2"
          >
            {selected.name}'s expense
          </label>
          <input
            type="number"
            id="first_name"
            className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={bill > paiedByUser ? paidByFriend : bill}
            disabled
          />
        </div>

        <div className="md:flex justify-center mb-2 ">
          <label
            htmlFor="friendExpense"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white w-1/2"
          >
            who is paying is bill?
          </label>
          <select
            id="paying"
            className="bg-gray-50 border  w-1/2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={whoIsPaied}
            onChange={(e) => setwhoIsPaied(e.target.value)}
          >
            <option value="you">you</option>
            <option value={selected.name}>{selected.name}</option>
          </select>
        </div>
        <Button>Split bill</Button>
      </form>
    </>
  );
}
