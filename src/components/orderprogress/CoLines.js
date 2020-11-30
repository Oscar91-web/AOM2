import { Link } from "react-router-dom";
import { Text } from "recharts";
import { GridCell, GridRow, TextField } from "rmwc";

const CoLines = ({ showOrderLines }) => {
    function clickedDelayed() {
        console.log("delayed clicked");
        showOrderLines({ order_number: 100107 });
    }

    function clickedShorted() {
        console.log("shorted clicked");
        showOrderLines({ product_id: "420001" });
    }

    return <>
        <Text textAnchor="middle">CO Lines</Text>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                {/* <TextField label="Delayed" value="17" readOnly style={{ backgroundColor: "rgb(255, 162, 162)"}}></TextField> */}
                <TextField label="Delayed" value="17" readOnly style={{ backgroundColor: "rgb(108, 240, 104)" }} onClick={clickedDelayed}></TextField>
            </GridCell>
        </GridRow>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                <TextField label="Shorted" value="221" readOnly style={{ backgroundColor: "rgb(240, 231, 104)" }} onClick={clickedShorted}></TextField>
            </GridCell>
        </GridRow>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                <Link to={{
                    pathname: '/holdsandexceptions',
                }}><TextField label="OnHold" value="316" readOnly style={{ backgroundColor: "rgb(255, 103, 103)" }} ></TextField></Link>
            </GridCell>
        </GridRow>

    </>;
}

export default CoLines;
