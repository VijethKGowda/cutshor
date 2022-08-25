import React from "react";

const Button = ({ button_text, onClick }) => {

  return (
    <>
      <button
        type="button"
        onClick={() => onClick()}
        className="px-4 py-4 w-full text-center border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
      >
        {button_text}
      </button>
    </>
  )
}

export default Button