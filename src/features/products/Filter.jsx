import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Filter() {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;

    setSelectedOption(value);
    navigate(`/products/${value}`);
  };
  return (
    <>
      <label className="block text-sm font-medium text-amber-50 700 mb-1">
        filter
      </label>

      <select
        value={selectedOption}
        onChange={handleChange}
        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer"
      >
        <option value="all" disabled>
          Catogery{" "}
        </option>
        <option value="all">All</option>

        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="groceries">Groceries</option>
      </select>

      {selectedOption && (
        <p className="mt-3 text-xs text-gray-500">Selected: {selectedOption}</p>
      )}
    </>
  );
}

export default Filter;
