import { GridRow, GridCell, TextField } from 'rmwc';

const EmployeeGroups = ({ employee, userGroups }) => {
    return (employee) ? 
         userGroups.map(ug =>
            <>
                <GridRow>
                    <GridCell span={12}>
                        <GridRow>
                            <GridCell span={2}>
                                <TextField outlined label="User" value={employee.name} readOnly />
                            </GridCell>
                            <GridCell span={4}>
                                <TextField outlined label="Group" value={ug} readOnly />
                            </GridCell>
                        </GridRow>
                    </GridCell>
                </GridRow>
                <p />
            </>
        )
    : <div></div>
}

export default EmployeeGroups;