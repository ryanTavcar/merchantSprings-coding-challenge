/**
 * Represents a sales record, fetched from the API.
 */
export interface Sales {
    /**
     * The ID of the sales record.
     */
    Id: number;
    /**
     * The ID of the store associated with the sales record.
     */
    storeId: number;
    /**
     * The ID of the order associated with the sales record.
     */
    orderId: string;
    /**
     * The latest ship date of the sales record.
     */
    latest_ship_date: string;
    /**
     * The shipment status of the sales record.
     */
    shipment_status: string;
    /**
     * The destination of the sales record.
     */
    destination: string;
    /**
     * The number of items in the sales record.
     */
    items: number;
    /**
     * The value of the order in the sales record.
     */
    orderValue: number;
    /**
     * The marketplace of the sales record.
     */
    marketplace: string;
    /**
     * The country of the sales record.
     */
    country: string;
    /**
     * The name of the shop associated with the sales record.
     */
    shopName: string;
  }
  
  /**
   * Represents a transformed sale used for the MUI DataGrid.
   */
  export interface TransformedSale {
    id: number;
    store: string;
    destination: string;
    marketplace: any;
    orderid: string;
    ordervalue: string;
    items: number;
    daysoverdue: number;
    country: string;
  }
  