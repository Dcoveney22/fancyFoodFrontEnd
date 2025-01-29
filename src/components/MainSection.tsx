import React from "react";
import ButtonIcon from "../icons/ButtonIcon";
import ResultsDisplay from "./ResultsDisplay";

function MainSection({ mainBody }: { mainBody: () => void }) {
  return (
    <div id="mainSection">
      <ResultsDisplay />
    </div>
  );
}

export default MainSection;
