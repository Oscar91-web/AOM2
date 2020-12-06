import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Text } from "recharts";
import { GridCell, GridRow, TextField } from "rmwc";
import { get } from "../Utils";

const CoLines = ({ showOrderLines, salesMan }) => {
    const [delayedOrderLines, setDelayedOrderLines] = useState(0);
    const [shortedOrderLines, setShortedOrderLines] = useState(0);
    const [holds, setHolds] = useState(0);

    function clickedDelayed() {
        console.log("delayed clicked");
        // showOrderLines({ order_number: 100107 });
        showOrderLines({salesman: salesMan, "ship-date-gt-now": "true"});
    }

    function clickedShorted() {
        console.log("shorted clicked");
        // showOrderLines({ product_id: "420001" });
        showOrderLines({salesman: salesMan, "qty-ship-lt-co": "true"});
    }

    useEffect(() => {
        console.log("use effect in CoLines");
        get("orderline", null, {salesman: salesMan, "ship-date-gt-now": "true", "select-count": "true"}, "count", setDelayedOrderLines);
        get("orderline", null, {salesman: salesMan, "qty-ship-lt-co": "true", "select-count": "true"}, "count", setShortedOrderLines);
        get("holds", null, {salesman: salesMan, "select-count": "true"}, "count", setHolds);
    }, [salesMan]);
    return <>
        <Text textAnchor="middle">CO Lines</Text>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                {/* <TextField label="Delayed" value="17" readOnly style={{ backgroundColor: "rgb(255, 162, 162)"}}></TextField> */}
                <TextField label="Delayed" value={delayedOrderLines} readOnly style={{ backgroundColor: "rgb(108, 240, 104)" }} onClick={clickedDelayed}></TextField>
            </GridCell>
        </GridRow>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                <TextField label="Shorted" value={shortedOrderLines} readOnly style={{ backgroundColor: "rgb(240, 231, 104)" }} onClick={clickedShorted}></TextField>
            </GridCell>
        </GridRow>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                <Link to={{
                    pathname: '/holdsandexceptions',
                }}><TextField label="OnHold" value={holds} readOnly style={{ backgroundColor: "rgb(255, 103, 103)" }} ></TextField></Link>
            </GridCell>
        </GridRow>

    </>;
}

export default CoLines;
