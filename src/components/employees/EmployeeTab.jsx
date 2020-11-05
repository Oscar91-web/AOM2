import { react } from 'react';
import { GridCell, Grid, GridRow, Tab, TabBar } from 'rmwc';
import EmployeeSearch from './EmployeeSearch';
const EmployeeTab = () => {
    return <div>
        <Grid>
            <GridRow>
                <GridCell>
        <TabBar>
            <Tab>Employee</Tab>
            <Tab>Groups</Tab>
        </TabBar>
        </GridCell>
        <GridCell>
        <EmployeeSearch></EmployeeSearch>
        </GridCell>
        </GridRow>

        </Grid>
    </div>
}
export default EmployeeTab;