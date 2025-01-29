import { log } from "console";
import React from "react";

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

function ResultsDisplay() {
  const arrayExampleData = exampleDataArray.map((data) => {
    return (
      <ul className="item" key={data.Item}>
        <h2>{data.Item}</h2>
        <li>
          <h3>{data.Supplier}</h3>
        </li>
      </ul>
    );
  });
  return <div className="ResultsDisplay">{arrayExampleData}</div>;
}

export default ResultsDisplay;
