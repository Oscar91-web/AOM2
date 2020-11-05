import { react } from 'react';
import { ListItemGraphic, ListItemText, ListItemMeta, ListItemPrimaryText, ListItemSecondaryText, List, ListGroup, ListItem, TextField, GridCell, GridRow } from 'rmwc';
const EmployeeDetails = () => {
    return <div>
      
     
                <GridRow>
                    <GridCell span={12}>
                        <TextField label="Name" readOnly></TextField>
                    </GridCell>
                </GridRow>
                <GridRow>
                    <br />
                </GridRow>
                <GridRow>
                    <GridCell span={12}>
                        <GridRow>
                            <GridCell span={2}>
                                <TextField label="Login" value="petr" readOnly />
                            </GridCell>
                            <GridCell span={2}>
                                <TextField label="User" value="petr" readOnly />
                            </GridCell>
                        </GridRow>
                    </GridCell>
                </GridRow>
                <GridRow>
                    <br />
                </GridRow>
                <GridRow>
                    <GridCell span={12}>
                        <GridRow>
                            <GridCell span={2}>
                                <TextField label="Legal Entity" value="11" readOnly />
                            </GridCell>
                            <GridCell span={4}>
                                <TextField value="My Company" readOnly />
                            </GridCell>
                        </GridRow>
                    </GridCell>
                </GridRow>
                <GridRow>
                    <GridCell span={12}>
                        <GridRow>
                            <GridCell span={2}>
                                <TextField label="Organizational Unit" value="111" readOnly />
                            </GridCell>
                            <GridCell span={4}>
                                <TextField value="My Organizational Unit" readOnly />
                            </GridCell>
                        </GridRow>
                    </GridCell>
                </GridRow>
            </div>
}
export default EmployeeDetails;