import React, { } from "react";
import { DataTable, DataTableBody, DataTableCell, DataTableContent, DataTableHead, DataTableHeadCell, DataTableRow } from "rmwc";

import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';

const OrderListDataTable = ({ orders, clicked, sortBy }) => {

  let orderList = orders.map(o =>
    <DataTableRow key={o.order_number} onClick={() => clicked(o)}>
      <DataTableCell>{o.order_number}</DataTableCell>
      <DataTableCell>{o.customer_number}</DataTableCell>
      <DataTableCell>{o.status}</DataTableCell>
      <DataTableCell>{o.salesman}</DataTableCell>
    </DataTableRow>
  );
  
  if (!orders || orders.length === 0) {
    return <></>;
  }
  return (
    <div>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>Order Number</DataTableHeadCell>
              <DataTableHeadCell>Customer Number</DataTableHeadCell>
              <DataTableHeadCell>Status</DataTableHeadCell>
              <DataTableHeadCell>Salesman</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {orderList}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
      {/* <EmployeeDetails employee={employee}></EmployeeDetails> */}
    </div>
  );
}

export default OrderListDataTable;
