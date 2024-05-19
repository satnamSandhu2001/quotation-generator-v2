import React from 'react';

export const InputPrimary = ({
  name,
  label,
  LabelClass,
  value,
  type,
  containerClass,
  InputClass,
  error,
  ...props
}) => {
  return type !== 'textarea' ? (
    <div className={`mb-2 ${containerClass ?? ''}`}>
      <label
        htmlFor={name}
        className={`block text-sm font-semibold ${LabelClass ?? ''}`}
      >
        {label}
      </label>
      <input
        {...props}
        type={type || 'text'}
        value={value}
        name={name}
        className={`block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-primary-200 focus:ring-primary-100/70 focus:outline-none focus:ring focus:ring-oacity-40 ${
          error ? 'border-red-500 ring ring-red-400 ring-opacity-40' : ''
        } ${InputClass ?? ''}`}
      />
      <p className="text-xs text-red-500 pt-1">{error}</p>
    </div>
  ) : (
    <div className={`mb-2 ${containerClass ?? ''}`}>
      <label
        htmlFor={name}
        className={`block text-sm font-semibold ${LabelClass ?? ''}`}
      >
        {label}
      </label>
      <textarea
        {...props}
        value={value}
        name={name}
        className={`block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-primary-200 focus:ring-primary-100/70 focus:outline-none focus:ring focus:ring-oacity-40 ${
          error ? 'border-red-500 ring ring-red-400 ring-opacity-40' : ''
        } ${InputClass ?? ''}`}
      ></textarea>
      <p className="text-xs text-red-500 pt-1">{error}</p>
    </div>
  );
};
