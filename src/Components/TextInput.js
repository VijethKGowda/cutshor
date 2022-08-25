import React from 'react'

const TextInput = ({ title, name, placeholder }) => {

  return (
    <>
      <div className="w-full">
        <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700">
          {title}
        </label>
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          className="mt-1 p-3 block w-full text-base border border-gray-300 focus:border-indigo-500 rounded-lg"
        />
      </div>
    </>
  )
}

export default TextInput