import { Menu, GridRow, Tab, TabBar, TextField, GridCell, MenuSurfaceAnchor, MenuItem } from "rmwc";
import '@rmwc/icon/styles';
import { useEffect, useState } from "react";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeGroups from "./EmployeeGroups";
import EmployeeListDataTable from "./EmployeeListDataTable";
import { get } from "../Utils";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [employee, setEmployee] = useState(null);
    const [employeeGroups, setEmployeeGroups] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [open, setOpen] = useState(false);
    const [detailedList, setDetailedList] = useState(false);
    const [userGroups, setUserGroups] = useState([]);
    
    useEffect(() => {
        if (employeeGroups.length === 0) {
            searchEmpGroups();
        }
    }, [employeeGroups]);

    const handleChange = (e) => {
        let value = e.target.value;
        setSearch(value);
        if (value.length > 1) {
            setOpen(true);
        }
        if (value.length > 2) {
            searchEmployees({ limit: 5, q: value });
        }
        else {
            setEmployees([]);
        }
    }

    const keyDown = (e) => {
        let value = e.target.value;
        if (e.key === 'Enter') {
            setSearch(e.target.value);
            setDetailedList(true);
            setOpen(false);
            setEmployees([]);
            setActiveTab(0);
            searchEmployees({ limit: 10, q: value });
        }
    }

    const clickedSearchButton = () => {
        setEmployee(null);
        setEmployees([]);
        setDetailedList(false);
    }

    const clicked = (e) => {
        setSearch("");
        setEmployees([]);
        setEmployee(e);
        setActiveTab(0);
        setOpen(false);
        searchUserGroups(e);
    };

    const setTab = (idx) => {
        setActiveTab(idx);
    }

    const searchEmployees = async (params) => {
        get("employees", null, params, "employees", setEmployees);
    }

    const searchUserGroups = async (employee) => {
        get("usergroups", employee.user, null, "usergroups", setUserGroups);
    };

    const searchEmpGroups = async () => {
        get("codelookup", "EMPGROUP", null, "codes", setEmployeeGroups);
    };

    let content;
    switch (activeTab) {
        case 0:
            content = employee && <EmployeeDetails employee={employee} setEmployee={setEmployee} employeeGroups={employeeGroups}></EmployeeDetails>;
            break;
        case 1:
            content = <EmployeeGroups employee={employee} userGroups={userGroups}></EmployeeGroups>;
            break;
        case -1:
            // content = <div></div>;
            break;
        default:
            content = <h3>No such tab: {activeTab}</h3>;
            break;
    }

    return <div>
        <GridRow>
            <GridCell span={6}>
                <TabBar activeTabIndex={activeTab} onActivate={evt => setTab(evt.detail.index)}>
                    <Tab minWidth>Employee</Tab>
                    <Tab minWidth>User Groups</Tab>
                </TabBar>
            </GridCell>
            <GridCell>
                <TextField autoFocus outlined icon="search" label="Search..." value={search} onChange={handleChange} onClick={clickedSearchButton} onKeyDown={keyDown} />
                <MenuSurfaceAnchor>
                    <Menu open={open} renderToPortal={true}>
                        {employees.map(e => (
                            <MenuItem key={e.user} onClick={() => clicked(e)}>{e.name} - {e.login}</MenuItem>
                        ))}
                    </Menu>
                </MenuSurfaceAnchor>
            </GridCell>
        </GridRow>
        {content}
        {/* <EmployeeList employees={employees} setEmployees={setEmployees} employee={employee} setEmployee={setEmployee}></EmployeeList> */}
        {detailedList && <EmployeeListDataTable employees={employees} clicked={clicked} ></EmployeeListDataTable>}
    </div>;
}

export default Employees;
