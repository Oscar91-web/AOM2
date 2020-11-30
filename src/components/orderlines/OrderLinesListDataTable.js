import { DataTable, DataTableBody, DataTableCell, DataTableContent, DataTableHead, DataTableHeadCell, DataTableRow } from "rmwc";

import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';

const OrderLinesListDataTable = ({ orderLines }) => {

  let orderList = (orderLines) ? orderLines.map(o =>
    <DataTableRow key={ o.order_number + "-" + o.rowpos +"-"+ o.rowseq}>
      <DataTableCell>{o.order_number}</DataTableCell>
      <DataTableCell>{o.rowpos}</DataTableCell>
      <DataTableCell>{o.rowsubpos}</DataTableCell>
      <DataTableCell>{o.rowseq}</DataTableCell>
      <DataTableCell>{o.product_id}</DataTableCell>
    </DataTableRow>)
    : <div></div>;
  
  if (!orderLines || orderLines.length === 0) {
    return <></>;
  }
  return (
    <div>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>Order Number</DataTableHeadCell>
              <DataTableHeadCell>Row position</DataTableHeadCell>
              <DataTableHeadCell>Row sub position</DataTableHeadCell>
              <DataTableHeadCell>Row sequence</DataTableHeadCell>
              <DataTableHeadCell>Product id</DataTableHeadCell>
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

export default OrderLinesListDataTable;
