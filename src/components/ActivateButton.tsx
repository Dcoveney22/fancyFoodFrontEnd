import React, { useState } from "react";
import ButtonIcon from "../icons/ButtonIcon";
import ResultsDisplay from "./ResultsDisplay";

function ActivateButton(props: {
  changeState: React.Dispatch<React.SetStateAction<boolean>>;
  currentState: boolean;
}) {
  return (
    <button
      className="ActivateButton"
      onClick={() => props.changeState(!props.currentState)}
    >
      <ButtonIcon />
      ACTIVATE
    </button>
  );
}

export default ActivateButton;
