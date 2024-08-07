import React from 'react';

export const InputSelect = ({
  name,
  label,
  LabelClass,
  value,
  options,
  containerClass,
  InputClass,
  error,
  ...props
}) => {
  return (
    <div className={`mb-2 ${containerClass ?? ''}`}>
      <label
        htmlFor={name}
        className={`block text-sm font-semibold ${LabelClass ?? ''}`}
      >
        {label}
      </label>
      <select
        {...props}
        value={value}
        name={name}
        className={`block w-full px-4 py-2.5 mt-2 text-black bg-white border rounded-md focus:border-primary-200 focus:ring-primary-100/70 focus:outline-none focus:ring focus:ring-oacity-40 ${
          error ? 'border-red-500 ring ring-red-400 ring-opacity-40' : ''
        } ${InputClass ?? ''}`}
      >
        <option label="Select option" value="" disabled />
        {options?.length > 0 &&
          options.map((o, i) => {
            return (
              <option key={i} value={o.value}>
                {o.label}
              </option>
            );
          })}
      </select>
      <p className="text-xs text-red-500 pt-1">{error}</p>
    </div>
  );
};
