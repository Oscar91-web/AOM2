import React, { } from "react";
import { DataTable, DataTableBody, DataTableCell, DataTableContent, DataTableHead, DataTableHeadCell, DataTableRow } from "rmwc";

import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';

const OrderListDataTable = ({ orders, clicked, sortBy }) => {
  const [sortDir, setSortDir] = React.useState(null);
  function sortClick() {
    console.log("SORTCLIOCKEKKED")
  }

  // function sortCustomerNumber(sortDir) {
  //   setSortDir(sortDir);
  // }
  // const [employee, setEmployee] = useState(null);
        let orderList = orders.map(e => 
        <DataTableRow key={e.order_number} onClick={() => clicked(e)}>
              <DataTableCell>{e.order_number}</DataTableCell>
              <DataTableCell>{e.customer_number}</DataTableCell>
              <DataTableCell>{e.status}</DataTableCell>
              <DataTableCell>{e.salesman}</DataTableCell>
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
