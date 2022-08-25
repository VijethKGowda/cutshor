import React from "react";
import TextInput from '../../../Components/TextInput'

const Personal = () => {
  return (
    <>
      <p className="text-4xl mt-20 font-semibold text-center mb-5">Welcome! First things first...</p>
      <p className="text-base text-gray-400 leading-normal text-center mb-8">You can always change them later.</p>
      <div className="space-y-8 mb-10">
        <TextInput
          title="First name"
          name="first-name"
          placeholder="Bobby Deol"
        />
        <TextInput
          title="Display name"
          name="display-name"
          placeholder="Bobby"
        />
      </div>
    </>
  )
}

export default Personal