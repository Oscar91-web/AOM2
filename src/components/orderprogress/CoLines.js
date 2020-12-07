import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Text } from "recharts";
import { GridCell, GridRow, TextField } from "rmwc";
import { get, mapColor } from "../Utils";

const CoLines = ({ showOrderLines, salesMan }) => {
    const [delayedOrderLines, setDelayedOrderLines] = useState(0);
    const [shortedOrderLines, setShortedOrderLines] = useState(0);
    const [holds, setHolds] = useState(0);

    function clickedDelayed() {
        console.log("delayed clicked");
        // showOrderLines({ order_number: 100107 });
        showOrderLines({ salesman: salesMan, "ship-date-gt-now": "true" });
    }

    function clickedShorted() {
        console.log("shorted clicked");
        // showOrderLines({ product_id: "420001" });
        showOrderLines({ salesman: salesMan, "qty-ship-lt-co": "true" });
    }

    useEffect(() => {
        console.log("use effect in CoLines");
        get("orderline", null, { salesman: salesMan, "ship-date-gt-now": "true", "select-count": "true" }, "count", setDelayedOrderLines);
        get("orderline", null, { salesman: salesMan, "qty-ship-lt-co": "true", "select-count": "true" }, "count", setShortedOrderLines);
        get("holds", null, { salesman: salesMan, "select-count": "true" }, "count", setHolds);
    }, [salesMan]);

    const colors = { low: 5, medium: 8, high: 100 };

    return <>
        <Text textAnchor="middle">CO Lines</Text>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                <TextField label="Delayed" value={delayedOrderLines} readOnly style={{ backgroundColor: `${mapColor(delayedOrderLines, colors)}` }} onClick={clickedDelayed}></TextField>
            </GridCell>
        </GridRow>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                <TextField label="Shorted" value={shortedOrderLines} readOnly style={{ backgroundColor: `${mapColor(shortedOrderLines, colors)}` }} onClick={clickedShorted}></TextField>
            </GridCell>
        </GridRow>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                <Link to={{
                    pathname: '/holdsandexceptions',
                }}>
                    <TextField label="OnHold" value={holds} readOnly style={{ backgroundColor: `${mapColor(holds, colors)}` }} />
                    </Link>
            </GridCell>
        </GridRow>

    </>;
}

export default CoLines;
