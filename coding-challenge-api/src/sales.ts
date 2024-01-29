import * as fs from "fs";
import csv from "csv-parser";

const ordersFilePath = "./data/orders.csv";
const storesFilePath = "./data/stores.csv";

const readCSV = (file: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const data: any[] = [];

    fs.createReadStream(file)
      .pipe(csv())
      .on("data", (row) => {
        delete row[""];
        data.push(row);
      })
      .on("end", () => {
        // CSV parsing is complete, resolve the promise with the data
        resolve(data);
      })
      .on("error", (error) => {
        // Handle errors during the file reading or parsing process
        reject(error);
      });
  });
};

export async function getSales(req: any, res: any) {
  const orderData = await readCSV(ordersFilePath);
  const storeData = await readCSV(storesFilePath);

  // Combine information based on 'storeId'
  const combinedData: any[] = orderData.map((order) => {
    const storeInfo = storeData.find(
      (store): boolean => store.storeId === order.storeId
    );
    if (storeInfo) {
      return { ...order, ...storeInfo };
    }
    return order;
  });

  res.json(combinedData);
}
