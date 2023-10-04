function StatButton({ onClick, disabled, children }) {
  const style =
    "w-7 mr-1 border rounded border-gray-600 " +
    "hover:bg-gray-700 active:bg-gray-900 transition-colors " +
    "disabled:bg-gray-800 disabled:text-gray-500";

  return (
    <button className={`${style}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default StatButton;
