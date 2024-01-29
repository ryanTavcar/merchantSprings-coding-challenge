import React from "react";
import { Sales } from "../types/sales";

const UseFetchSales = (): Sales[] => {
  const [sales, setSales] = React.useState<Sales[]>([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/sales")
      .then((results) => results.json())
      .then((data) => {
        setSales(data);
      });
  }, []);

  return sales;
};

export default UseFetchSales;
