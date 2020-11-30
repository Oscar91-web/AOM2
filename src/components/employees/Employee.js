import { Menu, GridRow, Tab, TabBar, TextField, Typography, GridCell, MenuSurfaceAnchor, MenuItem } from "rmwc";
// import Icon from '@rmwc/icon';
import axios from 'axios';
import '@rmwc/icon/styles';
// import '../customers/node_modules/@rmwc/icon/icon.css';
// import EmployeeList from "./EmployeeList";
import { useEffect, useState } from "react";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeGroups from "./EmployeeGroups";
import EmployeeListDataTable from "./EmployeeListDataTable";
import { buildURL, get } from "../Utils";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [employee, setEmployee] = useState(null);
    const [employeeGroups, setEmployeeGroups] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [open, setOpen] = useState(false);
    const [detailedList, setDetailedList] = useState(false);
    const [userGroups, setUserGroups] = useState([]);

    const handleChange = (e) => {
        let value = e.target.value;
        setSearch(value);
        if (value.length > 1) {
            setOpen(true);
        }
        if (value.length > 2) {
            searchEmployees({limit: 5, q: value});
        }
        else {
            setEmployees([]);
        }
    }

    const keyDown = (e) => {
        let value = e.target.value;
        console.log("key: " + e.key)
        console.log("trgt vl: " + e.target.value)
        if (e.key === 'Enter') {
            console.log('Enter pressed');
            setSearch(e.target.value);
            setDetailedList(true);
            setOpen(false);
            setEmployees([]);
            setActiveTab(0);
            searchEmployees({limit: 10, q:value});
        }
    }

    const clickedSearchButton = () => {
        setEmployee(null);
        setEmployees([]);
        setDetailedList(false);
    }

    const clicked = (e) => {
        console.log("CLICKJED!!!!")
        setSearch("");
        setEmployees([]);
        setEmployee(e);
        setActiveTab(0);
        setOpen(false);
        searchUserGroups(e);
    };

    const setTab = (idx) => {
        console.log("tab chosen: " + idx);
        setActiveTab(idx);
    }

    const searchEmployees = async (params) => {
        get("employees", null, params, "employees", setEmployees);
    }

    const searchUserGroups = async (employee) => {
        get("usergroups", employee.user, null, "usergroups", setUserGroups);
    };

    const searchEmpGroups = async () => {
        get("codelookup", "EMPGROUP", "codes", setEmployeeGroups);
    };
    
    let content;
    console.log("content for activeTab: " + activeTab);
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

    useEffect(() => {
        if (employeeGroups.length === 0) {
            console.log("only once...");
            searchEmpGroups();
        }
        else {
            console.log("already have empgroups");
        }
    });

    console.log("rendering Employee - group: " + employeeGroups);
    return <div>
        {/* <Typography use="headline4">Employees</Typography> */}

            <GridRow>
                <GridCell span={6}>
                <TabBar activeTabIndex={activeTab} onActivate={evt => setTab(evt.detail.index)}>
                    <Tab minWidth>Employee</Tab>
                    <Tab minWidth>User Groups</Tab>
                    </TabBar>
                </GridCell>
                <GridCell>
                    <TextField autoFocus outlined icon="search" label="Search..." value={search} onChange={handleChange} onClick={clickedSearchButton} onKeyDown={keyDown}/>
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
