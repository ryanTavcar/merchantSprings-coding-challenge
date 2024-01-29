import React from "react";
import { Sales, TransformedSale } from "../types/sales";
import { formatDollarValue } from "../functions/formatDollarValue";
import { calculateDaysFromNow } from "../functions/calculateDaysFromNow";

const useTransformSales = (sales: Sales[]): TransformedSale[] => {
  const [transformedSales, setTransformedSales] = React.useState<
    TransformedSale[]
  >([]);

  React.useEffect(() => {
    const transformSales = (sales: Sales[]): TransformedSale[] => {
        if (!sales) return []
      return sales.map((sale) => {
        return {
          id: sale.Id,
          store: sale.shopName,
          destination: sale.destination,
          marketplace: sale.marketplace,
          orderid: sale.orderId,
          ordervalue: formatDollarValue(sale.orderValue),
          items: sale.items,
          daysoverdue: calculateDaysFromNow(sale.latest_ship_date),
          country: sale.country,
        };
      });
    };

    setTransformedSales(transformSales(sales));
  }, [sales]);

  return transformedSales;
};

export default useTransformSales;
