
import React from "react";

const FormTextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  rows = 3,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-slate-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full resize-none rounded-lg border border-slate-200 bg-[#f7f4ff] px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      />
    </div>
  );
};

export default FormTextArea;
