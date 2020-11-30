import { GridCell, GridRow } from "rmwc";
import BoxItem from "./BoxItem";

const HoldsAndExceptions = () => {

    let colorOk = "rgb(108, 240, 104)";
    let colorWarning = "rgb(240, 231, 104)";
    let colorAlert = "rgb(255, 103, 103)";

    return <>
        <h2>Holds and exc</h2>
        <GridRow>
            <GridCell span={3}><BoxItem label={"091 - EDI Price Error"} value={215} bgColor={colorAlert}/></GridCell>
            <GridCell span={3}><BoxItem label={"502 - < 150 LB Not Fedex"} value={0} bgColor={colorOk}/></GridCell>
            <GridCell span={3}><BoxItem label={"Orders with Shortage"} value={24} bgColor={colorWarning}/></GridCell>
            <GridCell span={3}><BoxItem label={"No Transport Plan"} value={17} bgColor={colorOk}/></GridCell>
        </GridRow>
        <GridRow>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorWarning}/></GridCell>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorAlert}/></GridCell>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
        </GridRow>
        <GridRow>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorWarning}/></GridCell>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorAlert}/></GridCell>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
        </GridRow>
        <GridRow>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorWarning}/></GridCell>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorAlert}/></GridCell>
            <GridCell span={3}><BoxItem label={"Dalla"} value={17} bgColor={colorOk}/></GridCell>
        </GridRow>
    </>
}

export default HoldsAndExceptions;
