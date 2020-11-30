import React, { } from "react";
import { DataTable, DataTableBody, DataTableCell, DataTableContent, DataTableHead, DataTableHeadCell, DataTableRow } from "rmwc";

import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';

const CustomerListDataTable = ({ customers, clicked, sortBy }) => {
  const [sortDir, setSortDir] = React.useState(null);

  function sortCustomerNumber(sortDir) {
    setSortDir(sortDir);
  }

  let customerList = customers.map(c =>
    <DataTableRow key={c.customer_number} onClick={() => clicked(c)}>
      <DataTableCell>{c.customer_number}</DataTableCell>
      <DataTableCell>{c.name}</DataTableCell>
      <DataTableCell>{c.city}</DataTableCell>
    </DataTableRow>
  );

  if (!customers || customers.length === 0) {
    return <></>;
  }
  return (
    <div>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell sort={sortDir}
                onSortChange={sortDir => {
                  sortCustomerNumber(sortDir);
                  console.log(sortDir);
                }}>Customer Number</DataTableHeadCell>
              <DataTableHeadCell>Name</DataTableHeadCell>
              <DataTableHeadCell>City</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {customerList}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
      {/* <EmployeeDetails employee={employee}></EmployeeDetails> */}
    </div>
  );
}

export default CustomerListDataTable;
