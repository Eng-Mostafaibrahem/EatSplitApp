export function Button({ children, onClick }) {
  return (
    <div className=" flex justify-end m-2">
      <button
        className="mr-2 cursor-pointer bg-orange-400 px-4 py-2 rounded-lg"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
