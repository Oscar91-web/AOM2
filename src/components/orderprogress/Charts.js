import { GridCell, GridRow } from "rmwc";
import CoLines from "./CoLines";
import CustomerOrdersByStatus from "./CustomerOrdersByStatus";
import CustomerOrdersDueForShipment from "./CustomerOrdersDueForShipment";
import HoldsExceptionsByShipDate from "./HoldsExceptionsByShipDate";
import SalesStatistics from "./SalesStatistics";

const Charts = ({ showOrders, showOrderLines, salesMan }) => {

    return <>
        <GridRow>
            <GridCell span={4}>
                <CustomerOrdersDueForShipment />
            </GridCell>
            <GridCell span={4}>
                <CustomerOrdersByStatus showOrders={showOrders} salesMan={salesMan}/>
            </GridCell>
            <GridCell span={4}>
                <CoLines showOrderLines={showOrderLines}/>
            </GridCell>
        </GridRow>
        <GridRow>
            <GridCell span={4}>
                <HoldsExceptionsByShipDate />
            </GridCell>
            <GridCell span={4}>
                <SalesStatistics />
            </GridCell>
        </GridRow>
    </>;
}

export default Charts;

