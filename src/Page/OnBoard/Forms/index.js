import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button";
import Done from "./Done";
import Personal from "./Personal";
import PlanSelection from "./PlanSelection";
import Workspace from "./Workspace";

const Forms = ({ pageId }) => {
  let navigate = useNavigate();

  return (
    <>
      <div className="">
        {
          parseInt(pageId) === 0 ?
            <Personal /> :
            parseInt(pageId) === 1 ?
              <Workspace /> :
              parseInt(pageId) === 2 ?
                <PlanSelection /> :
                parseInt(pageId) === 3 ?
                  <Done /> : null
        }
        {
          parseInt(pageId) === 3 ?
            <Button onClick={() => { }} button_text="Launch CutShort" /> :
            <Button onClick={() => { navigate(`/onboard/${parseInt(pageId) + 1}`) }} button_text="Create workspace" />
        }
      </div>
    </>
  )
}

export default Forms