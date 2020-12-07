import { DataTable, DataTableBody, DataTableCell, DataTableContent, DataTableHead, DataTableHeadCell, DataTableRow } from "rmwc";

import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';

const HoldListDataTable = ({ holdLines }) => {

  let orderList = (holdLines) ? holdLines.map(h =>
    <DataTableRow key={ h.order_number + "-" + h.rowpos +"-"+ h.rowseq + "-" + h.rowsubpos}>
      <DataTableCell>{h.order_number}</DataTableCell>
      <DataTableCell>{h.product_id}</DataTableCell>
      <DataTableCell>{h.shipdate ? h.shipdate : "-"}</DataTableCell>
      <DataTableCell>{h.credate}</DataTableCell>
      <DataTableCell>{h.qtyship}</DataTableCell>
      <DataTableCell>{h.qtyco}</DataTableCell>
      <DataTableCell>{h.salesman}</DataTableCell>
      <DataTableCell>{h.hold_flag}</DataTableCell>
      <DataTableCell>{h.hold_value}</DataTableCell>
      <DataTableCell>{h.customer}</DataTableCell>
    </DataTableRow>)
    : <div></div>;
  
  if (!holdLines || holdLines.length === 0) {
    return <></>;
  }
  return (
    <div>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>Order Number</DataTableHeadCell>
              <DataTableHeadCell>Product</DataTableHeadCell>
              <DataTableHeadCell>Ship date</DataTableHeadCell>
              <DataTableHeadCell>Creation date</DataTableHeadCell>
              <DataTableHeadCell>Shipped quantity</DataTableHeadCell>
              <DataTableHeadCell>Quantity CO</DataTableHeadCell>
              <DataTableHeadCell>Salesman</DataTableHeadCell>
              <DataTableHeadCell>Holdflag</DataTableHeadCell>
              <DataTableHeadCell>Hold value</DataTableHeadCell>
              <DataTableHeadCell>Customer</DataTableHeadCell>
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

export default HoldListDataTable;
