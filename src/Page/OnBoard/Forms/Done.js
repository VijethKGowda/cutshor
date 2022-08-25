import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const Done = () => {

  return (
    <>
      <>
        <p className="text-4xl mt-20 font-semibold text-center mb-5">Congratulation!</p>
        <p className="text-base text-gray-400 leading-normal text-center mb-8">You have completed onboarding, you can start using CutShort!</p>
        <div className="space-y-14">
          <CheckCircleIcon className="text-indigo-600 w-24 mx-auto mb-6" />
        </div>
      </>
    </>
  )
}

export default Done