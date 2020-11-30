import { Menu, GridRow, TextField, GridCell, MenuSurfaceAnchor, MenuItem } from "rmwc";
import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';
import { useState } from "react";

import { get } from "../Utils";
import OrderListDataTable from "./OrderListDataTable";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");
    // const [order, setOrder] = useState(null);
    const [open, setOpen] = useState(false);
    const [detailedList, setDetailedList] = useState(false);

    const handleChange = (e) => {
        let value = e.target.value;
        setSearch(value);
        if (value.length > 1) {
            setOpen(true);
        }
        if (value.length > 2) {
            searchOrders(value);
        }
        else {
            setOrders([]);
        }
    }

    const keyDown = (e) => {
        let value = e.target.value;
        if (e.key === 'Enter') {
            setSearch(e.target.value);
            setDetailedList(true);
            setOpen(false);
            setOrders([]);
            searchOrders(value);
        }
    }

    const clickedSearchButton = () => {
        // setOrder(null);
        setOrders([]);
        setDetailedList(false);
    }

    const clicked = (e) => {
        setSearch("");
        setOrders([]);
        // setOrder(e);
        setOpen(false);
    };

    const searchOrders = async (value, col) => {
        get("order", null, {limit: 10, q: value }, "orders", setOrders);
    }

    return <div>
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

        {/* <EmployeeList orders={orders} setOrders={setOrders} employee={employee} setEmployee={setEmployee}></EmployeeList> */}
        {detailedList && <OrderListDataTable orders={orders} clicked={clicked} ></OrderListDataTable>}
    </div>;
}

export default Orders;
