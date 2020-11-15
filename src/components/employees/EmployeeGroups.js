// import { useState } from "react";
// import axios from 'axios';

const { GridRow, GridCell, TextField } = require("rmwc")

const EmployeeGroups = ({employee, userGroups}) => {

    // const [userGroups, setUserGroups] = useState(null);

    // const searchGroups = async (url) => {
    //     console.log(url);
    //     try {
    //         const data = await axios.get(url);
    //         if (data != null) {
    //             console.log(data.data.usergroups);
    //             setUserGroups(data.data.usergroups);
    //         }
    //     }
    //     catch (err) {
    //         console.log(err)
    //         // setError(err.message);
    //     }
    // }


    let userGroupsList = userGroups.map(ug => 
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
    <p/>
    </>
    );

    if (employee) {
        // searchGroups(API_URL + "/" + employee.user);
        return <>
        {userGroupsList}
        </>
    }
    else return <div/>;
}

export default EmployeeGroups;