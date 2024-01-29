
import React from "react";
import styled from "styled-components";


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


  return (
    <Container>
      <StyledHeading>Overdue Orders</StyledHeading>

      {/* Sales Table */}
    </Container>
  );
};

export default SalesTable;
