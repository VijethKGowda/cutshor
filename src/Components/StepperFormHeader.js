import React from 'react';

const StepperFormHeader = ({ steps, activeStep }) => {
  return (
    <>
      <div className="w-full mt-16">
        <div className="flex items-center align-middle">
          {
            steps.map((step, index) => (
              <>
                <div className="flex items-center relative">
                  <div className={`text-center w-full py-3 px-5 ${parseInt(activeStep) >= index ? 'bg-indigo-600' : 'bg-gray-200'} rounded-full text-sm md:text-lg font-bold text-white`}>
                    {index + 1}
                  </div>
                </div>
                {
                  steps.length > (index + 1) &&
                  <div className={`flex-auto h-px transition duration-500 ease-in-out bg-gray-200`} >
                    <div className={`h-px bg-indigo-600 ${parseInt(activeStep) > index ? "w-full" : parseInt(activeStep) === index ? "w-1/2 " : "w-0"}`}>
                    </div>
                  </div>
                }
              </>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default StepperFormHeader;