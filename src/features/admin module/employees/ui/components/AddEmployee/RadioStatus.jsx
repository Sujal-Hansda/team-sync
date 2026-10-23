import React from "react";

const RadioStatus = ({ label, name, value, onChange, options = [] }) => {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-slate-700">
        {label}
      </label>

      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2 text-sm text-slate-700"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="h-4 w-4 accent-indigo-600"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioStatus;