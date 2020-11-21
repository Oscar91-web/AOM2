import React, { } from "react";
import { DataTable, DataTableBody, DataTableCell, DataTableContent, DataTableHead, DataTableHeadCell, DataTableRow } from "rmwc";

import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css'

const EmployeeListDataTable = ({ employees, clicked }) => {

  // const [employee, setEmployee] = useState(null);
        let employeeList = employees.map(e => 
        <DataTableRow key={e.user} onClick={() => clicked(e)}>
              <DataTableCell>{e.number}</DataTableCell>
              <DataTableCell>{e.login}</DataTableCell>
              <DataTableCell>{e.user}</DataTableCell>
              <DataTableCell>{e.name}</DataTableCell>
              <DataTableCell>{e.legal_entity}</DataTableCell>
              <DataTableCell>{e.orgUnit}</DataTableCell>
              <DataTableCell>{e.department}</DataTableCell>
              <DataTableCell>{e.warehouse}</DataTableCell>
        </DataTableRow>
    );
    if (!employees || employees.length === 0) {
      return <></>;
    }
    return (
      <div>
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>Employment Number</DataTableHeadCell>
              <DataTableHeadCell>Login Id</DataTableHeadCell>
              <DataTableHeadCell>User Id</DataTableHeadCell>
              <DataTableHeadCell>Employment Name</DataTableHeadCell>
              <DataTableHeadCell>Legal Entity</DataTableHeadCell>
              <DataTableHeadCell>Organizational Unit</DataTableHeadCell>
              <DataTableHeadCell>Department</DataTableHeadCell>
              <DataTableHeadCell alignEnd>Warehouse Number</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
              {employeeList}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
      {/* <EmployeeDetails employee={employee}></EmployeeDetails> */}
      </div>
    );
}

export default EmployeeListDataTable;
