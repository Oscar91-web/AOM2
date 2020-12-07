import { useEffect, useState } from "react";
import { GridCell, GridRow, Tab, TabBar, TextField } from "rmwc";
import { get, mapColor } from "../Utils";
import BoxItem from "./BoxItem";
import HoldListDataTable from "./HoldListDataTable";

const HoldsAndExceptions = ({ salesMan }) => {

    const [holdList, setHoldList] = useState([]);
    const [holdsList, setHoldsList] = useState([]);
    const [aggregatedHolds, setAggregatedHolds] = useState([]);
    const [customer, setCustomer] = useState("");
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        get("holdlist", null, {}, "holdList", setHoldList);
        get("holdcounts", null, { salesman: salesMan, customer: customer }, "aggregatedHolds", setAggregatedHolds);
    }, [salesMan, customer]);

    let i = 0;
    let holdBoxes;
    let holds = {};
    aggregatedHolds.forEach(h => holds[h.value] = h.count);

    function showHoldLines(search) {    
        console.log("searching for:");
        console.log(search);
        if (customer) {
            console.log("adding customer: " + customer);
            search.customer = customer;
        }
        get("holds", null, search, "holdsList", setHoldsList);
        setActiveTab(1);
    }
    function getColor(h) {
        // let count = holds[h.hold_value];
        return mapColor(holds[h.hold_value], h);
    }

    holdBoxes = holdList.map(h =>
        holds[h.hold_value] ?
            <GridCell key={i++}>
                <BoxItem label={h.hold_value} value={holds[h.hold_value] ? holds[h.hold_value] : "-"} bgColor={getColor(h)} salesMan={salesMan} showHoldLines={showHoldLines} />
            </GridCell>
            : <></>
    );

    let content;
    switch (activeTab) {
        case 0:
            content = <>
                <p />
                <GridRow>
                    <GridCell>
                        <TextField outlined label="Customer" value={customer} onChange={(e) => setCustomer(e.target.value)} onClick={() => setCustomer("")} />
                    </GridCell>
                </GridRow>
                <p />
                <GridRow>{holdBoxes}</GridRow>
            </>
            break;
        case 1:
            content = <HoldListDataTable holdLines={holdsList}/>
            break;
        case 2:
            content = <h3>2</h3>
            break;
        default:
            content = <h3>No such tab: {activeTab}</h3>;
            break;
    }
    return <>
        <GridRow>
            <GridCell span={6}>
                <TabBar activeTabIndex={activeTab} onActivate={evt => setActiveTab(evt.detail.index)}>
                    <Tab minWidth>Holds</Tab>
                    <Tab minWidth>Details</Tab>
                </TabBar>
            </GridCell>
            {/* <GridCell>
                <TextField autoFocus outlined icon="search" value={user} label="User" onKeyDown={keyDown} onClick={onClick} onChange={(e) => setUser(e.target.value)} />
            </GridCell> */}
        </GridRow>
        {content}
        {/* <GridRow>
            <GridCell>
                <TextField outlined label="Customer" value={customer} onChange={(e) => setCustomer(e.target.value)} />
            </GridCell>
        </GridRow>
        <p />
        <GridRow>{holdBoxes}</GridRow> */}
        {/* <GridRow>
            <GridCell><BoxItem label={"091 - EDI Price Error"} value={215} bgColor={colorAlert}/></GridCell>
            <GridCell><BoxItem label={"502 - < 150 LB Not Fedex"} value={0} bgColor={colorOk}/></GridCell>
            <GridCell><BoxItem label={"Orders with Shortage"} value={24} bgColor={colorWarning}/></GridCell>
            <GridCell><BoxItem label={"No Transport Plan"} value={17} bgColor={colorOk}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorWarning}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorAlert}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorWarning}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorAlert}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorWarning}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorAlert}/></GridCell>
            <GridCell><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
        </GridRow> */}
    </>
}

export default HoldsAndExceptions;
