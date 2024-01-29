
import React from "react";
import styled from "styled-components";
import UseFetchSales from "./hooks/UseFetchSales";
import UseGetSalesDataGridColumns from "./hooks/UseGetSalesDataGridColumns";
import useTransformSales from "./hooks/UseTransformSales";
import { DataGrid } from "@mui/x-data-grid";
import SwapVertIcon from "@mui/icons-material/SwapVert";

/**
 * Renders a custom column header filter icon button for Mui DataGrid.
 * @returns The rendered custom column header filter icon button.
 */
function CustomColumnHeaderFilterIconButton() {
  return <SwapVertIcon htmlColor="#000" />;
}


const Container = styled.div`
  height: auto;
  width: 100%;

  .className-daysoverdue {
    color: red;
    font-weight: 800;
    padding-left: 50px;
  }

  .className-items {
    padding-left: 50px;
  }
`;

const StyledHeading = styled.h3`
  color: #6f6f6f;
  margin-left: 10px;
`;

/**
 * Renders a table component displaying overdue orders.
 * Fetches sales data from an API, transforms it into a workable format,
 * and displays it using Mui DataGrid.
 * @returns The SalesTable component.
 */
const SalesTable = () => {
  // --------------- Hooks ---------------
  const sales = UseFetchSales(); // fetch sales data from api
  const transformedSales = useTransformSales(sales); // transform sales data into workable format
  const columns = UseGetSalesDataGridColumns(transformedSales); // get columns data from Mui DataGrid

  return (
    <Container>
      <StyledHeading>Overdue Orders</StyledHeading>
      {transformedSales && (
        <DataGrid
          rows={transformedSales}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          disableColumnMenu
          hideFooterSelectedRowCount
          slots={{
            baseIconButton: CustomColumnHeaderFilterIconButton,
          }}
          sx={{
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              color: "#AAABB9",
              backgroundColor: "#f5f6fa",
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 800,
            },
            "& .MuiDataGrid-sortIcon": {
              color: "#000",
            },
            "& .MuiDataGrid-cellContent": {
              paddingLeft: "10px",
            },
          }}
        />
      )}
    </Container>
  );
};

export default SalesTable;
