import React, { } from "react";
import { List, SimpleListItem } from "rmwc";

import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';

const OrderList = ({ employees, setEmployees, setEmployee }) => {

  function clicked(e) {
    setEmployee(e);
    setEmployees([]);
  }

  let employeeList = employees.map(e =>
    <SimpleListItem onClick={() => clicked(e)}
      key={e.name}
      text={e.name}
      secondaryText={`${e.number} / ${e.login} / ${e.user}`}
      meta={`${e.org_unit}`}
    />
  );
  return (
    <div>
      <List twoLine>
        {employeeList}
      </List>
      {/* <EmployeeDetails employee={employee} setEmployee={setEmployee}></EmployeeDetails> */}
    </div>
  );
}

export default OrderList;
