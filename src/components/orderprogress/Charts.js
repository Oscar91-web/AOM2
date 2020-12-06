import { GridCell, GridRow } from "rmwc";
import CoLines from "./CoLines";
import CustomerOrdersByStatus from "./CustomerOrdersByStatus";
import CustomerOrdersDueForShipment from "./CustomerOrdersDueForShipment";
import HoldsExceptionsByShipDate from "./HoldsExceptionsByShipDate";
import SalesStatistics from "./SalesStatistics";

const Charts = ({ showOrders, showOrderLines, salesMan, diagramWidth }) => {

    return <>
        <GridRow>
            <GridCell >
                <CustomerOrdersDueForShipment diagramWidth={diagramWidth}/>
            </GridCell>
            <GridCell >
                <CustomerOrdersByStatus showOrders={showOrders} salesMan={salesMan} diagramWidth={diagramWidth}/>
            </GridCell>
            <GridCell >
                <CoLines showOrderLines={showOrderLines} diagramWidth={diagramWidth} salesMan={salesMan}/>
            </GridCell>
        </GridRow>
        <GridRow>
            <GridCell >
                <HoldsExceptionsByShipDate showOrderLines={showOrderLines} diagramWidth={diagramWidth}/>
            </GridCell>
            <GridCell >
                <SalesStatistics diagramWidth={diagramWidth}/>
            </GridCell>
        </GridRow>
    </>;
}

export default Charts;

