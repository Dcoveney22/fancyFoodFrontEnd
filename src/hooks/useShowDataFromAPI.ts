// hook to show data from API
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../types.ts";

export default function useShowDataFromAPI() {
  // const baseURL = import.meta.env.VITE_BASE_URL;

  return useQuery({
    queryKey: ["fancyFoodData"],
    queryFn: testFunction,
  });
}

async function testFunction() {
  const response = await fetch(`http://localhost:3000/foo`);
  let data = await response.json();
  // console.log(data);

  data = data.map((results: Product) => {
    return results;
  });
  return data;
}
