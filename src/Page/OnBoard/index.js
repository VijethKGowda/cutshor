import React from "react";
import { useParams } from "react-router-dom";
import StepperFormHeader from "../../Components/StepperFormHeader";
import Page404 from "../Page404";
import Forms from "./Forms";

const OnBoard = () => {
  const { pageId } = useParams();

  return (
    <>
      {
        parseInt(pageId) <= 3 ?
          <div className="my-16 px-3 sm:px-6 md:px-10 lg:px-28 w-full mx-auto max-w-4xl">
            <h1 className="flex font-semibold place-items-center text-4xl gap-4 justify-center">
              <img src="https://cdn.cutshort.io/public/images/new_logo_half.png" alt="logo" />
              CutShort
            </h1>
            <StepperFormHeader
              steps={[1, 2, 3, 4]}
              activeStep={pageId}
            />
            <Forms pageId={pageId} />
          </div> : <Page404 />
      }
    </>
  )
}

export default OnBoard;