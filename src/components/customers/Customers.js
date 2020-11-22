import { Menu, GridRow, Tab, TabBar, TextField, Typography, GridCell, MenuSurfaceAnchor, MenuItem } from "rmwc";
// import Icon from '@rmwc/icon';
import axios from 'axios';
import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';
// import EmployeeList from "./EmployeeList";
import { useEffect, useState } from "react";
import CustomerDetails from './CustomerDetails';

// import EmployeeGroups from "./EmployeeGroups";
// import EmployeeListDataTable from "./EmployeeListDataTable";
import { buildURL } from "../Utils";
import CustomerListDataTable from "./CustomerListDataTable";

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState("");
    const [customer, setCustomer] = useState(null);
    const [open, setOpen] = useState(false);
    const [detailedList, setDetailedList] = useState(false);
    const [ascending, setAscending] = useState(true);

    const handleChange = (e) => {
        let value = e.target.value;
        setSearch(value);
        if (value.length > 1) {
            setOpen(true);
        }
        if (value.length > 2) {
            searchCustomers(buildURL("customer", null, {limit: 5, q: value}));
        }
        else {
            setCustomers([]);
        }
    }
    const ascDesc = (s) => {
        return s + ((!ascending) ? "" : "-");
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
            setCustomers([]);
            // searchCustomers(API_URL + "/?limit=10&q=" + value);
            searchCustomers(value, "name");
        }
    }

    const clickedSearchButton = () => {
        setCustomer(null);
        setCustomers([]);
        setDetailedList(false);
    }

    const clicked = (e) => {
        console.log("CLICKJED!!!!")
        setSearch("");
        setCustomers([]);
        setCustomer(e);
        setOpen(false);
    };

    const searchCustomers = async (value, col) => {
        let url = buildURL("customer", null, {limit: 10, q: value, 'order-by': ascDesc(col) })
        console.log("SEARCHING........................")
        console.log(url);
        try {
            const data = await axios.get(url);
            if (data != null) {
                console.log(data.data.customers);
                setCustomers(data.data.customers);
            }
        }
        catch (err) {
            console.log(err)
            // setError(err.message);
        }
    }

    function sortBy(col, ascdesc) {
        searchCustomers(search, col);
    }


    // useEffect(() => {
    //     if (employeeGroups.length === 0) {
    //         console.log("only once...");
    //         searchEmpGroups();
    //     }
    //     else {
    //         console.log("already have empgroups");
    //     }
    // });

    return <div>
        {/* <Typography use="headline4">Employees</Typography> */}

            <GridRow>
                <GridCell span={6}>
                </GridCell>
                <GridCell>
                    <TextField autoFocus outlined icon="search" label="Search..." value={search} onChange={handleChange} onClick={clickedSearchButton} onKeyDown={keyDown}/>
                    <MenuSurfaceAnchor>
                        <Menu open={open} renderToPortal={true}>
                            {customers.map(e => (
                                <MenuItem key={e.user} onClick={() => clicked(e)}>{e.name} - {e.login}</MenuItem>
                            ))}
                        </Menu>
                    </MenuSurfaceAnchor>
                </GridCell>
            </GridRow>
        {/* {content} */}
        <CustomerDetails customer={customer} />

        {/* <EmployeeList customers={customers} setCustomers={setCustomers} employee={employee} setEmployee={setEmployee}></EmployeeList> */}
        {detailedList && <CustomerListDataTable customers={customers} clicked={clicked} sortBy={sortBy}></CustomerListDataTable>}
    </div>;
}

export default Customers;
