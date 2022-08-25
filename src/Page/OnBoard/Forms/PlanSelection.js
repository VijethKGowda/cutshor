import React, { useState } from "react";
import { UserGroupIcon, UserIcon } from '@heroicons/react/24/solid';

const PlanSelection = () => {
  const [planSelected, setPlaneSelected] = useState("individual")
  return (
    <>
      <p className="text-4xl mt-20 font-semibold text-center mb-5">How are you planning ot use CutShort?</p>
      <p className="text-base text-gray-400 leading-normal text-center mb-8">We'll streamline your setup experience accordingly.</p>
      <div className="grid grid-cols-2 gap-4 px-0 md:px-16 lg:px-16 my-8">
        <button
          className={`p-8 border w-full ${planSelected === "individual" ? "bg-white border-indigo-600" : "bg-bgGray-light border-gray-300"} hover:shadow rounded-lg`}
          onClick={(e) => { setPlaneSelected("individual") }}
        >
          <UserIcon className={`w-8 mb-4 ${planSelected === "individual" ? "text-indigo-600" : "text-gray-600"}`} />
          <h1 className="text-lg mb-2 w-full text-left font-bold text-gray-700">
            For my self
          </h1>
          <p className="text-sm w-full text-left text-lbGray-dark">
            Write better, Think more clearly, Stay organized
          </p>
        </button>
        <button
          className={`p-8 border w-full ${planSelected === "group" ? "bg-white border-indigo-600" : "bg-bgGray-light border-gray-300"} hover:shadow rounded-lg`}
          onClick={(e) => { setPlaneSelected("group") }}
        >
          <UserGroupIcon className={`w-8 mb-4 ${planSelected === "group" ? "text-indigo-600" : "text-gray-600"}`} />
          <h1 className="text-lg mb-2 w-full text-left font-bold text-gray-700">
            With my team
          </h1>
          <p className="text-sm w-full text-left text-lbGray-dark">
            Wikis, docs, tasks & projects, all in one place
          </p>
        </button>
      </div>

    </>
  )
}

export default PlanSelection