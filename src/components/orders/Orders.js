import { Menu, GridRow, Tab, TabBar, TextField, Typography, GridCell, MenuSurfaceAnchor, MenuItem } from "rmwc";
// import Icon from '@rmwc/icon';
import axios from 'axios';
import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';
// import EmployeeList from "./EmployeeList";
import { useEffect, useState } from "react";
import CustomerDetails from './OrderDetails';

// import EmployeeGroups from "./EmployeeGroups";
// import EmployeeListDataTable from "./EmployeeListDataTable";
import { buildURL } from "../Utils";
import OrderListDataTable from "./OrderListDataTable";
// import CustomerListDataTable from "./CustomerListDataTable";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState(null);
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
            searchOrders(buildURL("order", null, {limit: 5, q: value}));
        }
        else {
            setOrders([]);
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
            setOrders([]);
            // searchOrders(API_URL + "/?limit=10&q=" + value);
            searchOrders(value, "name");
        }
    }

    const clickedSearchButton = () => {
        setOrder(null);
        setOrders([]);
        setDetailedList(false);
    }

    const clicked = (e) => {
        console.log("CLICKJED!!!!")
        setSearch("");
        setOrders([]);
        setOrder(e);
        setOpen(false);
    };

    const searchOrders = async (value, col) => {
        let url = buildURL("order", null, {limit: 10, q: value, 'order-by': ascDesc(col) })
        console.log("SEARCHING........................")
        console.log(url);
        try {
            const data = await axios.get(url);
            if (data != null) {
                console.log(data.data.orders);
                setOrders(data.data.orders);
            }
        }
        catch (err) {
            console.log(err)
            // setError(err.message);
        }
    }

    // function sortBy(col, ascdesc) {
    //     searchOrders(search, col);
    // }


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
                            {orders.map(e => (
                                <MenuItem key={e.user} onClick={() => clicked(e)}>{e.order_number} - {e.customer_number}</MenuItem>
                            ))}
                        </Menu>
                    </MenuSurfaceAnchor>
                </GridCell>
            </GridRow>
        {/* {content} */}
        <CustomerDetails order={order} />

        {/* <EmployeeList orders={orders} setOrders={setOrders} employee={employee} setEmployee={setEmployee}></EmployeeList> */}
        {detailedList && <OrderListDataTable orders={orders} clicked={clicked} ></OrderListDataTable>}
    </div>;
}

export default Orders;
