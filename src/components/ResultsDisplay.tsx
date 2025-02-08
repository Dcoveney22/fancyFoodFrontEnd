import useShowDataFromAPI from "../hooks/useShowDataFromAPI";
import { Product } from "../../types";

function ResultsDisplay(props: { shouldShowResults: boolean }) {
  const { data, isLoading } = useShowDataFromAPI();
  // const [showResults, setShowResult] = useState(true);
  if (isLoading) {
    return <div>...LOADING</div>;
  }
  return (
    <div className="ResultsDisplay">
      {data.map((product: Product) => {
        if (product.Price === "0")
          return (
            <div>
              {props.shouldShowResults && (
                //other component?
                <ul className="item" key={product.Item}>
                  <h2>
                    {product.Item} from {product.Supplier} is OUT OF DATE
                  </h2>
                </ul>
              )}
            </div>
          );
        else {
          return (
            <div>
              {props.shouldShowResults && (
                //other component?
                <ul className="item" key={product.Item}>
                  <h2>
                    {product.Item} from {product.Supplier} has a new reduced
                    price: /£{product.Price}
                  </h2>
                </ul>
              )}
            </div>
          );
        }
      })}
    </div>
  );
}

export default ResultsDisplay;
