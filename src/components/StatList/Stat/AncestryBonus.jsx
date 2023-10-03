function AncestryBonus({ ancestryBonus, onChange }) {
  return (
    <td className="p-3 text-center">
      +&nbsp;
      <input
        className="bg-gray-800 p-2 rounded w-10 text-center"
        type="text"
        value={ancestryBonus}
        onChange={onChange}
      />
    </td>
  );
}

export default AncestryBonus;
