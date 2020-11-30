import { useState } from "react"
import { GridCell, GridRow, Tab, TabBar, TextField } from "rmwc"
import OrderListDataTable from "../orders/OrderListDataTable"
import buildURL, { get } from "../Utils"
import Charts from "./Charts"
import CoLines from "./CoLines"

import axios from 'axios';
import { snackbarQueue } from "../../snackbarQueue"

const { default: CustomerOrdersByStatus } = require("./CustomerOrdersByStatus")
const { default: CustomerOrdersDueForShipment } = require("./CustomerOrdersDueForShipment")
const { default: HoldsExceptionsByShipDate } = require("./HoldsExceptionsByShipDate")
const { default: SalesStatistics } = require("./SalesStatistics")

const DashBoard = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [open, setOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    
    const setTab = (idx) => {
        console.log("tab chosen: " + idx);
        setActiveTab(idx);
    }
    
    const searchOrders = async (value) => {
        get("order", null, {limit: 10, status: value, salesman: 'LABO'  }, "orders", setOrders);
        setActiveTab(1);
    }

    function showOrders(status) {
        console.log("show orders");
        searchOrders(status)
    }
    let content;
    switch (activeTab) {
        case 0:
            content =<Charts showOrders={showOrders}/>;
            break;
        case 1:
            content = <OrderListDataTable orders={orders}  clicked={null} ></OrderListDataTable>;
            break;
        case -1:
            // content = <div></div>;
            break;
        default:
            content = <h3>No such tab: {activeTab}</h3>;
            break;
    }
    return <>
            <GridRow>
                <GridCell span={6}>
                <TabBar activeTabIndex={activeTab} onActivate={evt => setTab(evt.detail.index)}>
                    <Tab minWidth>Dashboard</Tab>
                    <Tab minWidth>Orders</Tab>
                    </TabBar>
                </GridCell>
                <GridCell>
                    <TextField autoFocus outlined icon="search" label="Salesman..." />
                </GridCell>
            </GridRow>
            {content}
            </>
}

export default DashBoard;
