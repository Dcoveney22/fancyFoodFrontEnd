import React, { useState } from "react";
import ButtonIcon from "../icons/ButtonIcon";
import ResultsDisplay from "./ResultsDisplay";

function ActivateButton({}: { button: () => void }) {
  return (
    <div className="ActivateButton" onClick={ResultsDisplay}>
      <ButtonIcon />
      <p>ACTIVATE</p>
    </div>
  );
}

export default ActivateButton;
