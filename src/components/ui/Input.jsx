import React from 'react'

export default function Input({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
}) {
  return (
    <div className='flex flex-col'>
        <label className='font-bold text-xl text-ValoBlackt-'>
            {label}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`rounded-sm px-3 py-2 border-2 text-lg text-ValoBlack bg-gray-200
            ${error ? "border-ValoRed" : "border-transparent"}
            outline-none focus:bg-ValoWhite 
            ${error ? "" : "focus:border-ValoBlack"}`}
        />
        {error && (
          <p className='text-ValoRed text-sm mt-1'>{error}</p>
        )}
    </div>
  )
}
