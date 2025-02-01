// hook to show data from API
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";

export default function showDataFromAPI() {
  const baseURL = import.meta.env.VITE_BASE_URL;

  return useQuery({
    queryKey: ["fancyFoodData"],
    queryFn: async () => {
      const response = await fetch(`${baseURL}/dataResults`);
      let data = await response.json();
      console.log(data);

      data = data.map((results: Product) => {
        return results;
      });
      console.log(data);
    },
  });
}
