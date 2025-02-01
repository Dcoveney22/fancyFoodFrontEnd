import { log } from "console";
import React, { useState } from "react";
import ButtonIcon from "../icons/ButtonIcon";

const exampleDataArray = [
  {
    category: "Dairy",
    Item: "Truffle Cheese",
    Expiry_Date: 15 - 12 - 2024,
    Price: "$15.00",
    Supplier: "Gourmet Foods Inc.",
  },
  {
    category: "Canned Goods",
    Item: "Caviar",
    Expiry_Date: 11 - 12 - 2024,
    Price: "$100.00",
    Supplier: "Luxury Caviar Co.",
  },
];

function ResultsDisplay(props: { shouldShowResults: boolean }) {
  // const [showResults, setShowResult] = useState(true);
  return (
    <div className="ResultsDisplay">
      {exampleDataArray.map((data) => {
        return (
          <div>
            {props.shouldShowResults && (
              //other component?
              <ul className="item" key={data.Item}>
                <h2>{data.Item}</h2>
                <li>
                  <h3>{data.Supplier}</h3>
                </li>
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ResultsDisplay;
