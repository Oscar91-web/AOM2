import { Text } from "recharts";
import { GridCell, GridRow, TextField } from "rmwc";

const CoLines = () => {
    return <>
        <Text textAnchor="middle">CO Lines</Text>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                <TextField outlined label="Delayed" value="17" readOnly></TextField>
            </GridCell>
        </GridRow>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                <TextField outlined label="Shorted" value="221" readOnly></TextField>
            </GridCell>
        </GridRow>
        <p></p>
        <GridRow>
            <GridCell span={4}>
                <TextField outlined label="OnHold" value="316" readOnly></TextField>
            </GridCell>
        </GridRow>

    </>;
}

export default CoLines;
