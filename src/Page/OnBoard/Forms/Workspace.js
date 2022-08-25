import React from "react";
import TextInput from '../../../Components/TextInput'

const Workspace = () => {

  return (
    <>
      <p className="text-4xl mt-20 font-semibold text-center mb-5">Let's setup a home for all your works</p>
      <p className="text-base text-gray-400 leading-normal text-center mb-8">You can always create another workspace later.</p>
      <div className="space-y-8 mb-10">
        <TextInput
          title="Workspace Name"
          name="workspace-name"
          placeholder="CutShort"
        />
        <div className="w-full">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Workspace URL <span className="text-gray-400 text-xs">(optional)</span>
          </label>
          <div className="mt-1 w-full">
            <div className="flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-base">
                cutshort.com/
              </span>
              <input
                type="text"
                name="workspace-url"
                id="workspace-url"
                placeholder="URL"
                className="flex-1 block p-3 w-full min-w-0 rounded-none rounded-r-md border text-base border-gray-300 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Workspace