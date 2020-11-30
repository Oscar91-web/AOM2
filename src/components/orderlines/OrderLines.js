import { Menu, GridRow, TextField, GridCell, MenuSurfaceAnchor, MenuItem } from "rmwc";
import '@rmwc/icon/styles';
import '@rmwc/icon/icon.css';
import { useState } from "react";

import { get } from "../Utils";
import OrderListDataTable from "./OrderLinesListDataTable";

const OrdersLines = () => {
    const [orderLines, setOrderLines] = useState([]);
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
            setOrderLines([]);
        }
    }

    const keyDown = (e) => {
        let value = e.target.value;
        if (e.key === 'Enter') {
            setSearch(e.target.value);
            setDetailedList(true);
            setOpen(false);
            setOrderLines([]);
            searchOrders(value);
        }
    }

    const clickedSearchButton = () => {
        // setOrder(null);
        setOrderLines([]);
        setDetailedList(false);
    }

    const clicked = (e) => {
        setSearch("");
        setOrderLines([]);
        // setOrder(e);
        setOpen(false);
    };

    const searchOrders = async (value, col) => {
        get("order", null, {limit: 10, q: value }, "orderLines", setOrderLines);
    }

    return <div>
            <GridRow>
                <GridCell span={6}>
                </GridCell>
                <GridCell>
                    <TextField autoFocus outlined icon="search" label="Search..." value={search} onChange={handleChange} onClick={clickedSearchButton} onKeyDown={keyDown}/>
                    <MenuSurfaceAnchor>
                        <Menu open={open} renderToPortal={true}>
                            {orderLines.map(e => (
                                <MenuItem key={e.user} onClick={() => clicked(e)}>{e.order_number} - {e.customer_number}</MenuItem>
                            ))}
                        </Menu>
                    </MenuSurfaceAnchor>
                </GridCell>
            </GridRow>
        {/* {content} */}

        {/* <EmployeeList orderLines={orderLines} setOrderLines={setOrderLines} employee={employee} setEmployee={setEmployee}></EmployeeList> */}
        {detailedList && <OrderListDataTable orderLines={orderLines} clicked={clicked} ></OrderListDataTable>}
    </div>;
}

export default OrdersLines;
