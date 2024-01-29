import React from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import ReactCountryFlag from "react-country-flag";
import { removeLastChar } from "../functions/removeLastChar";
import { TransformedSale } from "../types/sales";

/**
 * Returns an array of GridColDef objects representing the columns for an overdue table.
 * @param sales An array of TransformedSale objects.
 * @returns An array of GridColDef objects.
 */
function UseGetSalesDataGridColumns(sales: TransformedSale[]): GridColDef[] {
  return React.useMemo((): GridColDef[] => {
    if (!sales) return [];
    return [
      {
        field: "marketplace",
        headerName: "MARKETPLACE",
        flex: 1,
        align: "left",
        renderCell: (p: GridRenderCellParams) => (
          <>
            <ReactCountryFlag
              countryCode={removeLastChar(sales[Number(p.id) - 1].country)}
              svg
              style={{ paddingRight: "10px", height: "20px", width: "20px" }}
            />
            <div style={{fontWeight: 600,}}>{sales[Number(p.id) - 1].marketplace}</div>
          </>
        ),
      },
      {
        field: "store",
        headerName: "STORE",
        flex: 1,
        align: "left",
      },
      {
        field: "orderid",
        headerName: "ORDER ID",
        flex: 1,
        align: "left",
      },
      {
        field: "ordervalue",
        headerName: "ORDER VALUE",
        flex: 1,
        renderCell: (p: GridRenderCellParams) => (
          <div style={{ paddingLeft: "50px",  fontWeight: 600, }}>
            {sales[Number(p.id) - 1].ordervalue}
          </div>
        ),
        align: "left",
      },
      {
        field: "items",
        headerName: "ITEMS",
        align: "left",
        renderCell: (p: GridRenderCellParams) => (
          <div style={{ paddingLeft: "15px",  fontWeight: 600, }}>
            {sales[Number(p.id) - 1].items}
          </div>
        ),
      },
      {
        field: "destination",
        headerName: "DESTINATION",
        flex: 1,
        align: "left",
      },
      {
        field: "daysoverdue",
        headerName: "DAYS OVERDUE",
        flex: 1,
        align: "left",
        renderCell: (p: GridRenderCellParams) => (
          <div style={{ paddingLeft: "40px" }}>
            {sales[Number(p.id) - 1].daysoverdue}
          </div>
        ),
        cellClassName: "className-daysoverdue",
      },
    ];
  }, [sales]);
}

export default UseGetSalesDataGridColumns;
