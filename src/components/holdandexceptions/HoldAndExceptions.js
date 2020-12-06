import { useEffect, useState } from "react";
import { GridCell, GridRow, TextField } from "rmwc";
import { get } from "../Utils";
import BoxItem from "./BoxItem";

const HoldsAndExceptions = ({ salesMan, showOrderLines }) => {

    const [holdList, setHoldList] = useState([]);
    const [aggregatedHolds, setAggregatedHolds] = useState([]);
    const [customer, setCustomer] = useState("");

    let colorOk = "rgb(108, 240, 104)";
    let colorWarning = "rgb(240, 231, 104)";
    let colorAlert = "rgb(255, 103, 103)";
    let colorGray = "rgb(176, 176, 176)";

    useEffect(() => {
        get("holdlist", null, {}, "holdList", setHoldList);
        get("holdcounts", null, { salesman: salesMan, customer: customer }, "aggregatedHolds", setAggregatedHolds);
    }, [salesMan, customer]);

    let i = 0;
    let holdBoxes;
    let holds = {};
    aggregatedHolds.forEach(h => holds[h.value] = h.count);

    function mapColor(h) {
        let count = holds[h.hold_value];
        let color = colorGray;
        if (count !== undefined) {
            if (count >= h.high) {
                color = colorAlert;
            }
            else if (count >= h.medium) {
                color = colorWarning;
            }
            else if (count >= h.low) {
                color = colorOk;
            }
            else {
                color = colorOk;
            }
        }
        else {
            count = colorGray;
        }
        return color;
    }

    holdBoxes = holdList.map(h =>
        <GridCell key={i++}>
            <BoxItem label={h.hold_value} value={holds[h.hold_value] ? holds[h.hold_value] : "-"} bgColor={mapColor(h)} salesMan={salesMan} showOrderLines={showOrderLines} />
        </GridCell>
    );

    return <>
        <GridRow>
            <GridCell>
                <TextField outlined label="Customer" value={customer} onChange={(e) => setCustomer(e.target.value)} />
            </GridCell>
        </GridRow>
        <p />
        <GridRow>{holdBoxes}</GridRow>
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
