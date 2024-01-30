import React from "react";
import { Sales } from "../types/sales";

interface FetchSalesResp {
  sales: Sales[],
  fetching: boolean
}

const UseFetchSales = (): FetchSalesResp => {
  const [sales, setSales] = React.useState<Sales[]>([]);
  const [fetching, setFetching] = React.useState<boolean>(true);
  React.useEffect(() => {
    fetch("http://localhost:8080/sales")
      .then((results) => results.json())
      .then((data) => {
        setFetching(true)
        setSales(data);
      });
  }, []);

  return {sales,fetching};
};

export default UseFetchSales;
