
import React from "react";

const FormInput = ({
  label,
  name,
  register,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  options = [],
  rows = 3,
}) => {
  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-[#f7f4ff] px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100";

  const labelClass =
    "mb-1.5 block text-xs font-medium text-slate-700";

  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClass}
          required={required}
        >
          <option value="">Select {label}</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClass}
          {...register(name,{required})}
        />
      )}
    </div>
  );
};

export default FormInput;
