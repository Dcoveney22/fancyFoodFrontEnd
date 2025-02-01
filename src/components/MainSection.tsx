import React, { useState } from "react";
import ButtonIcon from "../icons/ButtonIcon";
import ResultsDisplay from "./ResultsDisplay";
import ActivateButton from "./ActivateButton";

function MainSection() {
  const [showResults, setShowResult] = useState(false);
  return (
    <div id="mainSection">
      <ResultsDisplay shouldShowResults={showResults} />
      <ActivateButton changeState={setShowResult} currentState={showResults} />
    </div>
  );
}

export default MainSection;
