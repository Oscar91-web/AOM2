import { useState } from "react"
import { GridCell, GridRow, Tab, TabBar } from "rmwc"
import OrderLinesListDataTable from "../orderlines/OrderLinesListDataTable"
import OrderListDataTable from "../orders/OrderListDataTable"
import { get } from "../Utils"
import Charts from "./Charts"

const DashBoard = ({salesMan, diagramWidth}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [orders, setOrders] = useState([]);
    const [orderLines, setOrderLines] = useState([]);
    // const [params, setParams] = useState({});

    const searchOrders = async (value) => {
        if (salesMan) {
            get("order", null, { limit: 10, status: value, salesman: salesMan }, "orders", setOrders);
            setActiveTab(1);
        }
    }

    function showOrders(status) {
        searchOrders(status)
    }

    function showOrderLines(params) {
        // searchOrders(status)
        console.log("showing orderlines: " + params)
        searchOrderLines(params);
    }

    function searchOrderLines(params) {
        get("orderline", null, params, "orderlines", setOrderLines);
        setActiveTab(2);
    }

    // const keyDown = (e) => {
    //     let value = e.target.value;
    //     if (e.key === 'Enter') {
    //         get("pers", value, null, null, (obj) => {
    //             if (obj.number) {
    //                 setSalesMan(obj.number);
    //                 setActiveTab(0);
    //             }
    //             else {
    //                 setUser("");
    //                 setSalesMan(null);
    //             }
    //         });
    //     }
    // }

    // function onClick() {
    //     setUser("");
    // }

    let content;
    switch (activeTab) {
        case 0:
            content = <Charts showOrders={showOrders} salesMan={salesMan} showOrderLines={showOrderLines} diagramWidth={diagramWidth}/>;
            break;
        case 1:
            content = <OrderListDataTable orders={orders} clicked={null} />
            break;
        case 2:
            content = <OrderLinesListDataTable orderLines={orderLines} />
            break;
        default:
            content = <h3>No such tab: {activeTab}</h3>;
            break;
    }
    return <>
        <GridRow>
            <GridCell span={6}>
                <TabBar activeTabIndex={activeTab} onActivate={evt => setActiveTab(evt.detail.index)}>
                    <Tab minWidth>Dashboard</Tab>
                    <Tab minWidth>Orders</Tab>
                    <Tab minWidth>Order lines</Tab>
                </TabBar>
            </GridCell>
            {/* <GridCell>
                <TextField autoFocus outlined icon="search" value={user} label="User" onKeyDown={keyDown} onClick={onClick} onChange={(e) => setUser(e.target.value)} />
            </GridCell> */}
        </GridRow>
        {content}
    </>
}

export default DashBoard;
